# Docusaurus shiki twoslash example monorepo

The goal of this repository is to learn about shiki twoslash and how it can be used for typechecked code examples in monorepos.

Currently, I'm facing two separate issues when rendering code examples.

The first issue is related to code samples containing `@effect/schema` code. I'm seeing the following compiler errors when rendering the page:

```
Twoslash error: Errors were thrown in the sample, but not included in an errors tag
These errors were not marked as being expected: 2322 2345. 
Expected: // @errors: 2322 2345
Compiler Errors:

index.ts
  [2322] 122 - Type 'brand<typeof ULID, "ULID">' is not assignable to type 'Schema.All | PropertySignature.All<PropertyKey>'.
  [2345] 176 - Argument of type 'TypeLiteral<Fields, readonly [Record, ...Record[]]>' is not assignable to parameter of type 'Schema<{ readonly [x: string]: any; readonly [x: number]: any; readonly [x: symbol]: any; }, { readonly [x: string]: any; readonly [x: number]: any; readonly [x: symbol]: any; }, never>'.
```

Syntax highlighting and type checking works for non-effect code samples.

The second issue is that the code samples (that work) are rendered twice. Once with the light theme, the other time with the dark theme.

## Reproduction steps

1. `pnpm install`
2. `pnpm --filter docs start`
3. Visit the `http://localhost:3000/docs/packages/schema-extended` to see the compiler errors
4. Visit `http://localhost:3000/docs/packages/non-effect-code` to see the double render issue
