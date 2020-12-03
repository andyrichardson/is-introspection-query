import { parse, Document } from 'graphql';

export const isIntrospectionQueryDoc = (query: Document) => {
  const opDefs = query.definitions.filter(d => d.kind == "OperationDefinition") as OperationDefinitionNode[];

  // Must only have one definition
  if (opDefs.length > 1) {
    return false;
  }

  const selections = opDefs[0].selectionSet.selections;

  // Must only have one selection
  if (selections.length > 1) {
    return false
  }

  const selection = selections[0];

  // Must have single field
  if (selection.kind !== "Field") {
    return false;
  }

  if (selection.name.value !== "__schema") {
    return false;
  }

  return true;
};

export const isIntrospectionQuery = (query: string | Document) => isIntrospectionQueryDoc(typeof query === 'string' ? parse(query) : query);

export default isIntrospectionQuery;
