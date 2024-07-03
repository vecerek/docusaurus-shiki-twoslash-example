import * as Schema from "@effect/schema/Schema";

export const ULID = Schema.ULID.pipe(Schema.brand("ULID"));
export type ULID = typeof ULID.Type;
