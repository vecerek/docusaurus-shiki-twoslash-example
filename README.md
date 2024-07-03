# Docusaurus shiki twoslash example monorepo

The goal of this repository is to learn about shiki twoslash and how it can be used for typechecked code examples in monorepos.

Currently, I'm facing an issue when rendering code examples that come from an aliased workspace package containing some [Effect] code.
For example, code samples containing `@effect/schema` code produce the following compiler errors when rendering the page:

```
Twoslash error: Errors were thrown in the sample, but not included in an errors tag
These errors were not marked as being expected: 2345. 
Expected: // @errors: 2345
Compiler Errors:

index.ts
  [2345] 155 - Argument of type 'brand<typeof ULID, "ULID">' is not assignable to parameter of type 'Schema<unknown, unknown, unknown>'.
  [2345] 239 - Argument of type 'Effect<unknown, ParseError, unknown>' is not assignable to parameter of type 'Effect<unknown, ParseError, never>'.
```

Syntax highlighting and type checking works for non-aliased effect code samples as well as aliased non-effect code samples.

The same code compiles using regular TypeScript (no twoslash) in: `docs/src/this-compiles.ts`.

## Reproduction steps

1. `pnpm install`
2. `pnpm --filter docs start`
3. Visit the `http://localhost:3000/docs/packages/schema-extended` to see the compiler errors

The error is also reproducible using the twoslash CLI given some necessary changes.

```sh
pnpm --filter docs run twoslash:lint docs/packages/schema-extended.md ""
```

### Necessary changes

Add the following inline compiler option in the twoslash code sample in `docs/docs/packages/schema-extended.md`:
```ts
// @paths: { "@myorg/schema-extended": ["../../packages/schema-extended/src"] }
```

Note that I've patched `@typescript/twoslash` ([check the patch](patches/@typescript__twoslash@3.1.0.patch)) so it can process the `@paths` compiler option.

[Effect]: https://github.com/Effect-TS/effect
