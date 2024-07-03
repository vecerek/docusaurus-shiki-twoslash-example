---
sidebar_position: 2
---

# non-aliased effect code

Lorem ipsum

## Usage

```ts twoslash title="example.ts"
import { Schema } from "@effect/schema"
import { Effect } from "effect"

const ULID = Schema.ULID.pipe(Schema.brand("ULID"))

const decode = Schema.decodeUnknown(ULID)

const program = decode("01HZT9JC9RY11PPAY429ZDZ46X")

void Effect.runPromise(program).then(console.log, console.error)
```
