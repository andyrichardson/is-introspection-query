# is-introspection-query

A secure method of checking whether a GraphQL query is introspecting.

```tsx
import isIntrospectionQuery from "is-introspection-query";
import { parse } from "graphql";

// Strings
isIntrospectionQuery(parse(query));

// Document nodes
isIntrospectionQuery(query);
```
