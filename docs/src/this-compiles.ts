import { Schema } from "@effect/schema";
import { ULID } from "@myorg/schema-extended";
import { Effect } from "effect";

const decode = Schema.decodeUnknown(ULID);

const program = decode("01HZT9JC9RY11PPAY429ZDZ46X");

void Effect.runPromise(program).then(console.log, console.error);
