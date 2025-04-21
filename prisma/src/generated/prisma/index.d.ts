
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Utilisateur
 * 
 */
export type Utilisateur = $Result.DefaultSelection<Prisma.$UtilisateurPayload>
/**
 * Model Vin
 * 
 */
export type Vin = $Result.DefaultSelection<Prisma.$VinPayload>
/**
 * Model Cave
 * 
 */
export type Cave = $Result.DefaultSelection<Prisma.$CavePayload>
/**
 * Model Avis
 * 
 */
export type Avis = $Result.DefaultSelection<Prisma.$AvisPayload>
/**
 * Model CaveVin
 * 
 */
export type CaveVin = $Result.DefaultSelection<Prisma.$CaveVinPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Utilisateurs
 * const utilisateurs = await prisma.utilisateur.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Utilisateurs
   * const utilisateurs = await prisma.utilisateur.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.utilisateur`: Exposes CRUD operations for the **Utilisateur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Utilisateurs
    * const utilisateurs = await prisma.utilisateur.findMany()
    * ```
    */
  get utilisateur(): Prisma.UtilisateurDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vin`: Exposes CRUD operations for the **Vin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vins
    * const vins = await prisma.vin.findMany()
    * ```
    */
  get vin(): Prisma.VinDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cave`: Exposes CRUD operations for the **Cave** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Caves
    * const caves = await prisma.cave.findMany()
    * ```
    */
  get cave(): Prisma.CaveDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.avis`: Exposes CRUD operations for the **Avis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avis
    * const avis = await prisma.avis.findMany()
    * ```
    */
  get avis(): Prisma.AvisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.caveVin`: Exposes CRUD operations for the **CaveVin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CaveVins
    * const caveVins = await prisma.caveVin.findMany()
    * ```
    */
  get caveVin(): Prisma.CaveVinDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Utilisateur: 'Utilisateur',
    Vin: 'Vin',
    Cave: 'Cave',
    Avis: 'Avis',
    CaveVin: 'CaveVin'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "utilisateur" | "vin" | "cave" | "avis" | "caveVin"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Utilisateur: {
        payload: Prisma.$UtilisateurPayload<ExtArgs>
        fields: Prisma.UtilisateurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UtilisateurFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UtilisateurFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          findFirst: {
            args: Prisma.UtilisateurFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UtilisateurFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          findMany: {
            args: Prisma.UtilisateurFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          create: {
            args: Prisma.UtilisateurCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          createMany: {
            args: Prisma.UtilisateurCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UtilisateurCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          delete: {
            args: Prisma.UtilisateurDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          update: {
            args: Prisma.UtilisateurUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          deleteMany: {
            args: Prisma.UtilisateurDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UtilisateurUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UtilisateurUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          upsert: {
            args: Prisma.UtilisateurUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          aggregate: {
            args: Prisma.UtilisateurAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUtilisateur>
          }
          groupBy: {
            args: Prisma.UtilisateurGroupByArgs<ExtArgs>
            result: $Utils.Optional<UtilisateurGroupByOutputType>[]
          }
          count: {
            args: Prisma.UtilisateurCountArgs<ExtArgs>
            result: $Utils.Optional<UtilisateurCountAggregateOutputType> | number
          }
        }
      }
      Vin: {
        payload: Prisma.$VinPayload<ExtArgs>
        fields: Prisma.VinFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VinFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VinPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VinFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VinPayload>
          }
          findFirst: {
            args: Prisma.VinFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VinPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VinFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VinPayload>
          }
          findMany: {
            args: Prisma.VinFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VinPayload>[]
          }
          create: {
            args: Prisma.VinCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VinPayload>
          }
          createMany: {
            args: Prisma.VinCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VinCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VinPayload>[]
          }
          delete: {
            args: Prisma.VinDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VinPayload>
          }
          update: {
            args: Prisma.VinUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VinPayload>
          }
          deleteMany: {
            args: Prisma.VinDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VinUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VinUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VinPayload>[]
          }
          upsert: {
            args: Prisma.VinUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VinPayload>
          }
          aggregate: {
            args: Prisma.VinAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVin>
          }
          groupBy: {
            args: Prisma.VinGroupByArgs<ExtArgs>
            result: $Utils.Optional<VinGroupByOutputType>[]
          }
          count: {
            args: Prisma.VinCountArgs<ExtArgs>
            result: $Utils.Optional<VinCountAggregateOutputType> | number
          }
        }
      }
      Cave: {
        payload: Prisma.$CavePayload<ExtArgs>
        fields: Prisma.CaveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CaveFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CavePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CaveFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CavePayload>
          }
          findFirst: {
            args: Prisma.CaveFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CavePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CaveFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CavePayload>
          }
          findMany: {
            args: Prisma.CaveFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CavePayload>[]
          }
          create: {
            args: Prisma.CaveCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CavePayload>
          }
          createMany: {
            args: Prisma.CaveCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CaveCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CavePayload>[]
          }
          delete: {
            args: Prisma.CaveDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CavePayload>
          }
          update: {
            args: Prisma.CaveUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CavePayload>
          }
          deleteMany: {
            args: Prisma.CaveDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CaveUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CaveUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CavePayload>[]
          }
          upsert: {
            args: Prisma.CaveUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CavePayload>
          }
          aggregate: {
            args: Prisma.CaveAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCave>
          }
          groupBy: {
            args: Prisma.CaveGroupByArgs<ExtArgs>
            result: $Utils.Optional<CaveGroupByOutputType>[]
          }
          count: {
            args: Prisma.CaveCountArgs<ExtArgs>
            result: $Utils.Optional<CaveCountAggregateOutputType> | number
          }
        }
      }
      Avis: {
        payload: Prisma.$AvisPayload<ExtArgs>
        fields: Prisma.AvisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisPayload>
          }
          findFirst: {
            args: Prisma.AvisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisPayload>
          }
          findMany: {
            args: Prisma.AvisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisPayload>[]
          }
          create: {
            args: Prisma.AvisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisPayload>
          }
          createMany: {
            args: Prisma.AvisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisPayload>[]
          }
          delete: {
            args: Prisma.AvisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisPayload>
          }
          update: {
            args: Prisma.AvisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisPayload>
          }
          deleteMany: {
            args: Prisma.AvisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisPayload>[]
          }
          upsert: {
            args: Prisma.AvisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisPayload>
          }
          aggregate: {
            args: Prisma.AvisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvis>
          }
          groupBy: {
            args: Prisma.AvisGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvisGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvisCountArgs<ExtArgs>
            result: $Utils.Optional<AvisCountAggregateOutputType> | number
          }
        }
      }
      CaveVin: {
        payload: Prisma.$CaveVinPayload<ExtArgs>
        fields: Prisma.CaveVinFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CaveVinFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaveVinPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CaveVinFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaveVinPayload>
          }
          findFirst: {
            args: Prisma.CaveVinFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaveVinPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CaveVinFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaveVinPayload>
          }
          findMany: {
            args: Prisma.CaveVinFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaveVinPayload>[]
          }
          create: {
            args: Prisma.CaveVinCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaveVinPayload>
          }
          createMany: {
            args: Prisma.CaveVinCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CaveVinCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaveVinPayload>[]
          }
          delete: {
            args: Prisma.CaveVinDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaveVinPayload>
          }
          update: {
            args: Prisma.CaveVinUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaveVinPayload>
          }
          deleteMany: {
            args: Prisma.CaveVinDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CaveVinUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CaveVinUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaveVinPayload>[]
          }
          upsert: {
            args: Prisma.CaveVinUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaveVinPayload>
          }
          aggregate: {
            args: Prisma.CaveVinAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCaveVin>
          }
          groupBy: {
            args: Prisma.CaveVinGroupByArgs<ExtArgs>
            result: $Utils.Optional<CaveVinGroupByOutputType>[]
          }
          count: {
            args: Prisma.CaveVinCountArgs<ExtArgs>
            result: $Utils.Optional<CaveVinCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    utilisateur?: UtilisateurOmit
    vin?: VinOmit
    cave?: CaveOmit
    avis?: AvisOmit
    caveVin?: CaveVinOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UtilisateurCountOutputType
   */

  export type UtilisateurCountOutputType = {
    caves: number
  }

  export type UtilisateurCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caves?: boolean | UtilisateurCountOutputTypeCountCavesArgs
  }

  // Custom InputTypes
  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilisateurCountOutputType
     */
    select?: UtilisateurCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountCavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaveWhereInput
  }


  /**
   * Count Type VinCountOutputType
   */

  export type VinCountOutputType = {
    avis: number
    caves: number
    caveVins: number
  }

  export type VinCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avis?: boolean | VinCountOutputTypeCountAvisArgs
    caves?: boolean | VinCountOutputTypeCountCavesArgs
    caveVins?: boolean | VinCountOutputTypeCountCaveVinsArgs
  }

  // Custom InputTypes
  /**
   * VinCountOutputType without action
   */
  export type VinCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VinCountOutputType
     */
    select?: VinCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VinCountOutputType without action
   */
  export type VinCountOutputTypeCountAvisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvisWhereInput
  }

  /**
   * VinCountOutputType without action
   */
  export type VinCountOutputTypeCountCavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaveWhereInput
  }

  /**
   * VinCountOutputType without action
   */
  export type VinCountOutputTypeCountCaveVinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaveVinWhereInput
  }


  /**
   * Count Type CaveCountOutputType
   */

  export type CaveCountOutputType = {
    vins: number
    avis: number
    CaveVin: number
  }

  export type CaveCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vins?: boolean | CaveCountOutputTypeCountVinsArgs
    avis?: boolean | CaveCountOutputTypeCountAvisArgs
    CaveVin?: boolean | CaveCountOutputTypeCountCaveVinArgs
  }

  // Custom InputTypes
  /**
   * CaveCountOutputType without action
   */
  export type CaveCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaveCountOutputType
     */
    select?: CaveCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CaveCountOutputType without action
   */
  export type CaveCountOutputTypeCountVinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VinWhereInput
  }

  /**
   * CaveCountOutputType without action
   */
  export type CaveCountOutputTypeCountAvisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvisWhereInput
  }

  /**
   * CaveCountOutputType without action
   */
  export type CaveCountOutputTypeCountCaveVinArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaveVinWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Utilisateur
   */

  export type AggregateUtilisateur = {
    _count: UtilisateurCountAggregateOutputType | null
    _min: UtilisateurMinAggregateOutputType | null
    _max: UtilisateurMaxAggregateOutputType | null
  }

  export type UtilisateurMinAggregateOutputType = {
    id: string | null
    pseudonyme: string | null
    email: string | null
    password: string | null
  }

  export type UtilisateurMaxAggregateOutputType = {
    id: string | null
    pseudonyme: string | null
    email: string | null
    password: string | null
  }

  export type UtilisateurCountAggregateOutputType = {
    id: number
    pseudonyme: number
    email: number
    password: number
    _all: number
  }


  export type UtilisateurMinAggregateInputType = {
    id?: true
    pseudonyme?: true
    email?: true
    password?: true
  }

  export type UtilisateurMaxAggregateInputType = {
    id?: true
    pseudonyme?: true
    email?: true
    password?: true
  }

  export type UtilisateurCountAggregateInputType = {
    id?: true
    pseudonyme?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UtilisateurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utilisateur to aggregate.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Utilisateurs
    **/
    _count?: true | UtilisateurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UtilisateurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UtilisateurMaxAggregateInputType
  }

  export type GetUtilisateurAggregateType<T extends UtilisateurAggregateArgs> = {
        [P in keyof T & keyof AggregateUtilisateur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUtilisateur[P]>
      : GetScalarType<T[P], AggregateUtilisateur[P]>
  }




  export type UtilisateurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UtilisateurWhereInput
    orderBy?: UtilisateurOrderByWithAggregationInput | UtilisateurOrderByWithAggregationInput[]
    by: UtilisateurScalarFieldEnum[] | UtilisateurScalarFieldEnum
    having?: UtilisateurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UtilisateurCountAggregateInputType | true
    _min?: UtilisateurMinAggregateInputType
    _max?: UtilisateurMaxAggregateInputType
  }

  export type UtilisateurGroupByOutputType = {
    id: string
    pseudonyme: string
    email: string
    password: string
    _count: UtilisateurCountAggregateOutputType | null
    _min: UtilisateurMinAggregateOutputType | null
    _max: UtilisateurMaxAggregateOutputType | null
  }

  type GetUtilisateurGroupByPayload<T extends UtilisateurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UtilisateurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UtilisateurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UtilisateurGroupByOutputType[P]>
            : GetScalarType<T[P], UtilisateurGroupByOutputType[P]>
        }
      >
    >


  export type UtilisateurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pseudonyme?: boolean
    email?: boolean
    password?: boolean
    caves?: boolean | Utilisateur$cavesArgs<ExtArgs>
    _count?: boolean | UtilisateurCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["utilisateur"]>

  export type UtilisateurSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pseudonyme?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["utilisateur"]>

  export type UtilisateurSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pseudonyme?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["utilisateur"]>

  export type UtilisateurSelectScalar = {
    id?: boolean
    pseudonyme?: boolean
    email?: boolean
    password?: boolean
  }

  export type UtilisateurOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pseudonyme" | "email" | "password", ExtArgs["result"]["utilisateur"]>
  export type UtilisateurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caves?: boolean | Utilisateur$cavesArgs<ExtArgs>
    _count?: boolean | UtilisateurCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UtilisateurIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UtilisateurIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UtilisateurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Utilisateur"
    objects: {
      caves: Prisma.$CavePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pseudonyme: string
      email: string
      password: string
    }, ExtArgs["result"]["utilisateur"]>
    composites: {}
  }

  type UtilisateurGetPayload<S extends boolean | null | undefined | UtilisateurDefaultArgs> = $Result.GetResult<Prisma.$UtilisateurPayload, S>

  type UtilisateurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UtilisateurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UtilisateurCountAggregateInputType | true
    }

  export interface UtilisateurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Utilisateur'], meta: { name: 'Utilisateur' } }
    /**
     * Find zero or one Utilisateur that matches the filter.
     * @param {UtilisateurFindUniqueArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UtilisateurFindUniqueArgs>(args: SelectSubset<T, UtilisateurFindUniqueArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Utilisateur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UtilisateurFindUniqueOrThrowArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UtilisateurFindUniqueOrThrowArgs>(args: SelectSubset<T, UtilisateurFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindFirstArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UtilisateurFindFirstArgs>(args?: SelectSubset<T, UtilisateurFindFirstArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindFirstOrThrowArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UtilisateurFindFirstOrThrowArgs>(args?: SelectSubset<T, UtilisateurFindFirstOrThrowArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Utilisateurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Utilisateurs
     * const utilisateurs = await prisma.utilisateur.findMany()
     * 
     * // Get first 10 Utilisateurs
     * const utilisateurs = await prisma.utilisateur.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UtilisateurFindManyArgs>(args?: SelectSubset<T, UtilisateurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Utilisateur.
     * @param {UtilisateurCreateArgs} args - Arguments to create a Utilisateur.
     * @example
     * // Create one Utilisateur
     * const Utilisateur = await prisma.utilisateur.create({
     *   data: {
     *     // ... data to create a Utilisateur
     *   }
     * })
     * 
     */
    create<T extends UtilisateurCreateArgs>(args: SelectSubset<T, UtilisateurCreateArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Utilisateurs.
     * @param {UtilisateurCreateManyArgs} args - Arguments to create many Utilisateurs.
     * @example
     * // Create many Utilisateurs
     * const utilisateur = await prisma.utilisateur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UtilisateurCreateManyArgs>(args?: SelectSubset<T, UtilisateurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Utilisateurs and returns the data saved in the database.
     * @param {UtilisateurCreateManyAndReturnArgs} args - Arguments to create many Utilisateurs.
     * @example
     * // Create many Utilisateurs
     * const utilisateur = await prisma.utilisateur.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Utilisateurs and only return the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UtilisateurCreateManyAndReturnArgs>(args?: SelectSubset<T, UtilisateurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Utilisateur.
     * @param {UtilisateurDeleteArgs} args - Arguments to delete one Utilisateur.
     * @example
     * // Delete one Utilisateur
     * const Utilisateur = await prisma.utilisateur.delete({
     *   where: {
     *     // ... filter to delete one Utilisateur
     *   }
     * })
     * 
     */
    delete<T extends UtilisateurDeleteArgs>(args: SelectSubset<T, UtilisateurDeleteArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Utilisateur.
     * @param {UtilisateurUpdateArgs} args - Arguments to update one Utilisateur.
     * @example
     * // Update one Utilisateur
     * const utilisateur = await prisma.utilisateur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UtilisateurUpdateArgs>(args: SelectSubset<T, UtilisateurUpdateArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Utilisateurs.
     * @param {UtilisateurDeleteManyArgs} args - Arguments to filter Utilisateurs to delete.
     * @example
     * // Delete a few Utilisateurs
     * const { count } = await prisma.utilisateur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UtilisateurDeleteManyArgs>(args?: SelectSubset<T, UtilisateurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Utilisateurs
     * const utilisateur = await prisma.utilisateur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UtilisateurUpdateManyArgs>(args: SelectSubset<T, UtilisateurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilisateurs and returns the data updated in the database.
     * @param {UtilisateurUpdateManyAndReturnArgs} args - Arguments to update many Utilisateurs.
     * @example
     * // Update many Utilisateurs
     * const utilisateur = await prisma.utilisateur.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Utilisateurs and only return the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UtilisateurUpdateManyAndReturnArgs>(args: SelectSubset<T, UtilisateurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Utilisateur.
     * @param {UtilisateurUpsertArgs} args - Arguments to update or create a Utilisateur.
     * @example
     * // Update or create a Utilisateur
     * const utilisateur = await prisma.utilisateur.upsert({
     *   create: {
     *     // ... data to create a Utilisateur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Utilisateur we want to update
     *   }
     * })
     */
    upsert<T extends UtilisateurUpsertArgs>(args: SelectSubset<T, UtilisateurUpsertArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurCountArgs} args - Arguments to filter Utilisateurs to count.
     * @example
     * // Count the number of Utilisateurs
     * const count = await prisma.utilisateur.count({
     *   where: {
     *     // ... the filter for the Utilisateurs we want to count
     *   }
     * })
    **/
    count<T extends UtilisateurCountArgs>(
      args?: Subset<T, UtilisateurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UtilisateurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Utilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UtilisateurAggregateArgs>(args: Subset<T, UtilisateurAggregateArgs>): Prisma.PrismaPromise<GetUtilisateurAggregateType<T>>

    /**
     * Group by Utilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UtilisateurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UtilisateurGroupByArgs['orderBy'] }
        : { orderBy?: UtilisateurGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UtilisateurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUtilisateurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Utilisateur model
   */
  readonly fields: UtilisateurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Utilisateur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UtilisateurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    caves<T extends Utilisateur$cavesArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$cavesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CavePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Utilisateur model
   */
  interface UtilisateurFieldRefs {
    readonly id: FieldRef<"Utilisateur", 'String'>
    readonly pseudonyme: FieldRef<"Utilisateur", 'String'>
    readonly email: FieldRef<"Utilisateur", 'String'>
    readonly password: FieldRef<"Utilisateur", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Utilisateur findUnique
   */
  export type UtilisateurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur findUniqueOrThrow
   */
  export type UtilisateurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur findFirst
   */
  export type UtilisateurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur findFirstOrThrow
   */
  export type UtilisateurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur findMany
   */
  export type UtilisateurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateurs to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur create
   */
  export type UtilisateurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to create a Utilisateur.
     */
    data: XOR<UtilisateurCreateInput, UtilisateurUncheckedCreateInput>
  }

  /**
   * Utilisateur createMany
   */
  export type UtilisateurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Utilisateurs.
     */
    data: UtilisateurCreateManyInput | UtilisateurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Utilisateur createManyAndReturn
   */
  export type UtilisateurCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * The data used to create many Utilisateurs.
     */
    data: UtilisateurCreateManyInput | UtilisateurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Utilisateur update
   */
  export type UtilisateurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to update a Utilisateur.
     */
    data: XOR<UtilisateurUpdateInput, UtilisateurUncheckedUpdateInput>
    /**
     * Choose, which Utilisateur to update.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur updateMany
   */
  export type UtilisateurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Utilisateurs.
     */
    data: XOR<UtilisateurUpdateManyMutationInput, UtilisateurUncheckedUpdateManyInput>
    /**
     * Filter which Utilisateurs to update
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to update.
     */
    limit?: number
  }

  /**
   * Utilisateur updateManyAndReturn
   */
  export type UtilisateurUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * The data used to update Utilisateurs.
     */
    data: XOR<UtilisateurUpdateManyMutationInput, UtilisateurUncheckedUpdateManyInput>
    /**
     * Filter which Utilisateurs to update
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to update.
     */
    limit?: number
  }

  /**
   * Utilisateur upsert
   */
  export type UtilisateurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The filter to search for the Utilisateur to update in case it exists.
     */
    where: UtilisateurWhereUniqueInput
    /**
     * In case the Utilisateur found by the `where` argument doesn't exist, create a new Utilisateur with this data.
     */
    create: XOR<UtilisateurCreateInput, UtilisateurUncheckedCreateInput>
    /**
     * In case the Utilisateur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UtilisateurUpdateInput, UtilisateurUncheckedUpdateInput>
  }

  /**
   * Utilisateur delete
   */
  export type UtilisateurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter which Utilisateur to delete.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur deleteMany
   */
  export type UtilisateurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utilisateurs to delete
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to delete.
     */
    limit?: number
  }

  /**
   * Utilisateur.caves
   */
  export type Utilisateur$cavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cave
     */
    select?: CaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cave
     */
    omit?: CaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaveInclude<ExtArgs> | null
    where?: CaveWhereInput
    orderBy?: CaveOrderByWithRelationInput | CaveOrderByWithRelationInput[]
    cursor?: CaveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CaveScalarFieldEnum | CaveScalarFieldEnum[]
  }

  /**
   * Utilisateur without action
   */
  export type UtilisateurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
  }


  /**
   * Model Vin
   */

  export type AggregateVin = {
    _count: VinCountAggregateOutputType | null
    _avg: VinAvgAggregateOutputType | null
    _sum: VinSumAggregateOutputType | null
    _min: VinMinAggregateOutputType | null
    _max: VinMaxAggregateOutputType | null
  }

  export type VinAvgAggregateOutputType = {
    annee: number | null
    quantite: number | null
  }

  export type VinSumAggregateOutputType = {
    annee: number | null
    quantite: number | null
  }

  export type VinMinAggregateOutputType = {
    id: string | null
    couleur: string | null
    annee: number | null
    appellation: string | null
    nom: string | null
    quantite: number | null
    is_consumed: boolean | null
    favoris: boolean | null
  }

  export type VinMaxAggregateOutputType = {
    id: string | null
    couleur: string | null
    annee: number | null
    appellation: string | null
    nom: string | null
    quantite: number | null
    is_consumed: boolean | null
    favoris: boolean | null
  }

  export type VinCountAggregateOutputType = {
    id: number
    couleur: number
    annee: number
    appellation: number
    nom: number
    quantite: number
    is_consumed: number
    favoris: number
    _all: number
  }


  export type VinAvgAggregateInputType = {
    annee?: true
    quantite?: true
  }

  export type VinSumAggregateInputType = {
    annee?: true
    quantite?: true
  }

  export type VinMinAggregateInputType = {
    id?: true
    couleur?: true
    annee?: true
    appellation?: true
    nom?: true
    quantite?: true
    is_consumed?: true
    favoris?: true
  }

  export type VinMaxAggregateInputType = {
    id?: true
    couleur?: true
    annee?: true
    appellation?: true
    nom?: true
    quantite?: true
    is_consumed?: true
    favoris?: true
  }

  export type VinCountAggregateInputType = {
    id?: true
    couleur?: true
    annee?: true
    appellation?: true
    nom?: true
    quantite?: true
    is_consumed?: true
    favoris?: true
    _all?: true
  }

  export type VinAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vin to aggregate.
     */
    where?: VinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vins to fetch.
     */
    orderBy?: VinOrderByWithRelationInput | VinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vins
    **/
    _count?: true | VinCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VinAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VinSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VinMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VinMaxAggregateInputType
  }

  export type GetVinAggregateType<T extends VinAggregateArgs> = {
        [P in keyof T & keyof AggregateVin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVin[P]>
      : GetScalarType<T[P], AggregateVin[P]>
  }




  export type VinGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VinWhereInput
    orderBy?: VinOrderByWithAggregationInput | VinOrderByWithAggregationInput[]
    by: VinScalarFieldEnum[] | VinScalarFieldEnum
    having?: VinScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VinCountAggregateInputType | true
    _avg?: VinAvgAggregateInputType
    _sum?: VinSumAggregateInputType
    _min?: VinMinAggregateInputType
    _max?: VinMaxAggregateInputType
  }

  export type VinGroupByOutputType = {
    id: string
    couleur: string
    annee: number
    appellation: string | null
    nom: string
    quantite: number
    is_consumed: boolean
    favoris: boolean
    _count: VinCountAggregateOutputType | null
    _avg: VinAvgAggregateOutputType | null
    _sum: VinSumAggregateOutputType | null
    _min: VinMinAggregateOutputType | null
    _max: VinMaxAggregateOutputType | null
  }

  type GetVinGroupByPayload<T extends VinGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VinGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VinGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VinGroupByOutputType[P]>
            : GetScalarType<T[P], VinGroupByOutputType[P]>
        }
      >
    >


  export type VinSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    couleur?: boolean
    annee?: boolean
    appellation?: boolean
    nom?: boolean
    quantite?: boolean
    is_consumed?: boolean
    favoris?: boolean
    avis?: boolean | Vin$avisArgs<ExtArgs>
    caves?: boolean | Vin$cavesArgs<ExtArgs>
    caveVins?: boolean | Vin$caveVinsArgs<ExtArgs>
    _count?: boolean | VinCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vin"]>

  export type VinSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    couleur?: boolean
    annee?: boolean
    appellation?: boolean
    nom?: boolean
    quantite?: boolean
    is_consumed?: boolean
    favoris?: boolean
  }, ExtArgs["result"]["vin"]>

  export type VinSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    couleur?: boolean
    annee?: boolean
    appellation?: boolean
    nom?: boolean
    quantite?: boolean
    is_consumed?: boolean
    favoris?: boolean
  }, ExtArgs["result"]["vin"]>

  export type VinSelectScalar = {
    id?: boolean
    couleur?: boolean
    annee?: boolean
    appellation?: boolean
    nom?: boolean
    quantite?: boolean
    is_consumed?: boolean
    favoris?: boolean
  }

  export type VinOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "couleur" | "annee" | "appellation" | "nom" | "quantite" | "is_consumed" | "favoris", ExtArgs["result"]["vin"]>
  export type VinInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avis?: boolean | Vin$avisArgs<ExtArgs>
    caves?: boolean | Vin$cavesArgs<ExtArgs>
    caveVins?: boolean | Vin$caveVinsArgs<ExtArgs>
    _count?: boolean | VinCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VinIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VinIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VinPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vin"
    objects: {
      avis: Prisma.$AvisPayload<ExtArgs>[]
      caves: Prisma.$CavePayload<ExtArgs>[]
      caveVins: Prisma.$CaveVinPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      couleur: string
      annee: number
      appellation: string | null
      nom: string
      quantite: number
      is_consumed: boolean
      favoris: boolean
    }, ExtArgs["result"]["vin"]>
    composites: {}
  }

  type VinGetPayload<S extends boolean | null | undefined | VinDefaultArgs> = $Result.GetResult<Prisma.$VinPayload, S>

  type VinCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VinFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VinCountAggregateInputType | true
    }

  export interface VinDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vin'], meta: { name: 'Vin' } }
    /**
     * Find zero or one Vin that matches the filter.
     * @param {VinFindUniqueArgs} args - Arguments to find a Vin
     * @example
     * // Get one Vin
     * const vin = await prisma.vin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VinFindUniqueArgs>(args: SelectSubset<T, VinFindUniqueArgs<ExtArgs>>): Prisma__VinClient<$Result.GetResult<Prisma.$VinPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VinFindUniqueOrThrowArgs} args - Arguments to find a Vin
     * @example
     * // Get one Vin
     * const vin = await prisma.vin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VinFindUniqueOrThrowArgs>(args: SelectSubset<T, VinFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VinClient<$Result.GetResult<Prisma.$VinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VinFindFirstArgs} args - Arguments to find a Vin
     * @example
     * // Get one Vin
     * const vin = await prisma.vin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VinFindFirstArgs>(args?: SelectSubset<T, VinFindFirstArgs<ExtArgs>>): Prisma__VinClient<$Result.GetResult<Prisma.$VinPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VinFindFirstOrThrowArgs} args - Arguments to find a Vin
     * @example
     * // Get one Vin
     * const vin = await prisma.vin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VinFindFirstOrThrowArgs>(args?: SelectSubset<T, VinFindFirstOrThrowArgs<ExtArgs>>): Prisma__VinClient<$Result.GetResult<Prisma.$VinPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VinFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vins
     * const vins = await prisma.vin.findMany()
     * 
     * // Get first 10 Vins
     * const vins = await prisma.vin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vinWithIdOnly = await prisma.vin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VinFindManyArgs>(args?: SelectSubset<T, VinFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vin.
     * @param {VinCreateArgs} args - Arguments to create a Vin.
     * @example
     * // Create one Vin
     * const Vin = await prisma.vin.create({
     *   data: {
     *     // ... data to create a Vin
     *   }
     * })
     * 
     */
    create<T extends VinCreateArgs>(args: SelectSubset<T, VinCreateArgs<ExtArgs>>): Prisma__VinClient<$Result.GetResult<Prisma.$VinPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vins.
     * @param {VinCreateManyArgs} args - Arguments to create many Vins.
     * @example
     * // Create many Vins
     * const vin = await prisma.vin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VinCreateManyArgs>(args?: SelectSubset<T, VinCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vins and returns the data saved in the database.
     * @param {VinCreateManyAndReturnArgs} args - Arguments to create many Vins.
     * @example
     * // Create many Vins
     * const vin = await prisma.vin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vins and only return the `id`
     * const vinWithIdOnly = await prisma.vin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VinCreateManyAndReturnArgs>(args?: SelectSubset<T, VinCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VinPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vin.
     * @param {VinDeleteArgs} args - Arguments to delete one Vin.
     * @example
     * // Delete one Vin
     * const Vin = await prisma.vin.delete({
     *   where: {
     *     // ... filter to delete one Vin
     *   }
     * })
     * 
     */
    delete<T extends VinDeleteArgs>(args: SelectSubset<T, VinDeleteArgs<ExtArgs>>): Prisma__VinClient<$Result.GetResult<Prisma.$VinPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vin.
     * @param {VinUpdateArgs} args - Arguments to update one Vin.
     * @example
     * // Update one Vin
     * const vin = await prisma.vin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VinUpdateArgs>(args: SelectSubset<T, VinUpdateArgs<ExtArgs>>): Prisma__VinClient<$Result.GetResult<Prisma.$VinPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vins.
     * @param {VinDeleteManyArgs} args - Arguments to filter Vins to delete.
     * @example
     * // Delete a few Vins
     * const { count } = await prisma.vin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VinDeleteManyArgs>(args?: SelectSubset<T, VinDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VinUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vins
     * const vin = await prisma.vin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VinUpdateManyArgs>(args: SelectSubset<T, VinUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vins and returns the data updated in the database.
     * @param {VinUpdateManyAndReturnArgs} args - Arguments to update many Vins.
     * @example
     * // Update many Vins
     * const vin = await prisma.vin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vins and only return the `id`
     * const vinWithIdOnly = await prisma.vin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VinUpdateManyAndReturnArgs>(args: SelectSubset<T, VinUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VinPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vin.
     * @param {VinUpsertArgs} args - Arguments to update or create a Vin.
     * @example
     * // Update or create a Vin
     * const vin = await prisma.vin.upsert({
     *   create: {
     *     // ... data to create a Vin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vin we want to update
     *   }
     * })
     */
    upsert<T extends VinUpsertArgs>(args: SelectSubset<T, VinUpsertArgs<ExtArgs>>): Prisma__VinClient<$Result.GetResult<Prisma.$VinPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VinCountArgs} args - Arguments to filter Vins to count.
     * @example
     * // Count the number of Vins
     * const count = await prisma.vin.count({
     *   where: {
     *     // ... the filter for the Vins we want to count
     *   }
     * })
    **/
    count<T extends VinCountArgs>(
      args?: Subset<T, VinCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VinCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VinAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VinAggregateArgs>(args: Subset<T, VinAggregateArgs>): Prisma.PrismaPromise<GetVinAggregateType<T>>

    /**
     * Group by Vin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VinGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VinGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VinGroupByArgs['orderBy'] }
        : { orderBy?: VinGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VinGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVinGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vin model
   */
  readonly fields: VinFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VinClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    avis<T extends Vin$avisArgs<ExtArgs> = {}>(args?: Subset<T, Vin$avisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    caves<T extends Vin$cavesArgs<ExtArgs> = {}>(args?: Subset<T, Vin$cavesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CavePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    caveVins<T extends Vin$caveVinsArgs<ExtArgs> = {}>(args?: Subset<T, Vin$caveVinsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaveVinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vin model
   */
  interface VinFieldRefs {
    readonly id: FieldRef<"Vin", 'String'>
    readonly couleur: FieldRef<"Vin", 'String'>
    readonly annee: FieldRef<"Vin", 'Int'>
    readonly appellation: FieldRef<"Vin", 'String'>
    readonly nom: FieldRef<"Vin", 'String'>
    readonly quantite: FieldRef<"Vin", 'Int'>
    readonly is_consumed: FieldRef<"Vin", 'Boolean'>
    readonly favoris: FieldRef<"Vin", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Vin findUnique
   */
  export type VinFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vin
     */
    select?: VinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vin
     */
    omit?: VinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VinInclude<ExtArgs> | null
    /**
     * Filter, which Vin to fetch.
     */
    where: VinWhereUniqueInput
  }

  /**
   * Vin findUniqueOrThrow
   */
  export type VinFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vin
     */
    select?: VinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vin
     */
    omit?: VinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VinInclude<ExtArgs> | null
    /**
     * Filter, which Vin to fetch.
     */
    where: VinWhereUniqueInput
  }

  /**
   * Vin findFirst
   */
  export type VinFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vin
     */
    select?: VinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vin
     */
    omit?: VinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VinInclude<ExtArgs> | null
    /**
     * Filter, which Vin to fetch.
     */
    where?: VinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vins to fetch.
     */
    orderBy?: VinOrderByWithRelationInput | VinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vins.
     */
    cursor?: VinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vins.
     */
    distinct?: VinScalarFieldEnum | VinScalarFieldEnum[]
  }

  /**
   * Vin findFirstOrThrow
   */
  export type VinFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vin
     */
    select?: VinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vin
     */
    omit?: VinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VinInclude<ExtArgs> | null
    /**
     * Filter, which Vin to fetch.
     */
    where?: VinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vins to fetch.
     */
    orderBy?: VinOrderByWithRelationInput | VinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vins.
     */
    cursor?: VinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vins.
     */
    distinct?: VinScalarFieldEnum | VinScalarFieldEnum[]
  }

  /**
   * Vin findMany
   */
  export type VinFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vin
     */
    select?: VinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vin
     */
    omit?: VinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VinInclude<ExtArgs> | null
    /**
     * Filter, which Vins to fetch.
     */
    where?: VinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vins to fetch.
     */
    orderBy?: VinOrderByWithRelationInput | VinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vins.
     */
    cursor?: VinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vins.
     */
    skip?: number
    distinct?: VinScalarFieldEnum | VinScalarFieldEnum[]
  }

  /**
   * Vin create
   */
  export type VinCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vin
     */
    select?: VinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vin
     */
    omit?: VinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VinInclude<ExtArgs> | null
    /**
     * The data needed to create a Vin.
     */
    data: XOR<VinCreateInput, VinUncheckedCreateInput>
  }

  /**
   * Vin createMany
   */
  export type VinCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vins.
     */
    data: VinCreateManyInput | VinCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vin createManyAndReturn
   */
  export type VinCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vin
     */
    select?: VinSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vin
     */
    omit?: VinOmit<ExtArgs> | null
    /**
     * The data used to create many Vins.
     */
    data: VinCreateManyInput | VinCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vin update
   */
  export type VinUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vin
     */
    select?: VinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vin
     */
    omit?: VinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VinInclude<ExtArgs> | null
    /**
     * The data needed to update a Vin.
     */
    data: XOR<VinUpdateInput, VinUncheckedUpdateInput>
    /**
     * Choose, which Vin to update.
     */
    where: VinWhereUniqueInput
  }

  /**
   * Vin updateMany
   */
  export type VinUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vins.
     */
    data: XOR<VinUpdateManyMutationInput, VinUncheckedUpdateManyInput>
    /**
     * Filter which Vins to update
     */
    where?: VinWhereInput
    /**
     * Limit how many Vins to update.
     */
    limit?: number
  }

  /**
   * Vin updateManyAndReturn
   */
  export type VinUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vin
     */
    select?: VinSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vin
     */
    omit?: VinOmit<ExtArgs> | null
    /**
     * The data used to update Vins.
     */
    data: XOR<VinUpdateManyMutationInput, VinUncheckedUpdateManyInput>
    /**
     * Filter which Vins to update
     */
    where?: VinWhereInput
    /**
     * Limit how many Vins to update.
     */
    limit?: number
  }

  /**
   * Vin upsert
   */
  export type VinUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vin
     */
    select?: VinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vin
     */
    omit?: VinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VinInclude<ExtArgs> | null
    /**
     * The filter to search for the Vin to update in case it exists.
     */
    where: VinWhereUniqueInput
    /**
     * In case the Vin found by the `where` argument doesn't exist, create a new Vin with this data.
     */
    create: XOR<VinCreateInput, VinUncheckedCreateInput>
    /**
     * In case the Vin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VinUpdateInput, VinUncheckedUpdateInput>
  }

  /**
   * Vin delete
   */
  export type VinDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vin
     */
    select?: VinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vin
     */
    omit?: VinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VinInclude<ExtArgs> | null
    /**
     * Filter which Vin to delete.
     */
    where: VinWhereUniqueInput
  }

  /**
   * Vin deleteMany
   */
  export type VinDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vins to delete
     */
    where?: VinWhereInput
    /**
     * Limit how many Vins to delete.
     */
    limit?: number
  }

  /**
   * Vin.avis
   */
  export type Vin$avisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
    where?: AvisWhereInput
    orderBy?: AvisOrderByWithRelationInput | AvisOrderByWithRelationInput[]
    cursor?: AvisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvisScalarFieldEnum | AvisScalarFieldEnum[]
  }

  /**
   * Vin.caves
   */
  export type Vin$cavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cave
     */
    select?: CaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cave
     */
    omit?: CaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaveInclude<ExtArgs> | null
    where?: CaveWhereInput
    orderBy?: CaveOrderByWithRelationInput | CaveOrderByWithRelationInput[]
    cursor?: CaveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CaveScalarFieldEnum | CaveScalarFieldEnum[]
  }

  /**
   * Vin.caveVins
   */
  export type Vin$caveVinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaveVin
     */
    select?: CaveVinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaveVin
     */
    omit?: CaveVinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaveVinInclude<ExtArgs> | null
    where?: CaveVinWhereInput
    orderBy?: CaveVinOrderByWithRelationInput | CaveVinOrderByWithRelationInput[]
    cursor?: CaveVinWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CaveVinScalarFieldEnum | CaveVinScalarFieldEnum[]
  }

  /**
   * Vin without action
   */
  export type VinDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vin
     */
    select?: VinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vin
     */
    omit?: VinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VinInclude<ExtArgs> | null
  }


  /**
   * Model Cave
   */

  export type AggregateCave = {
    _count: CaveCountAggregateOutputType | null
    _min: CaveMinAggregateOutputType | null
    _max: CaveMaxAggregateOutputType | null
  }

  export type CaveMinAggregateOutputType = {
    id: string | null
    nom: string | null
    utilisateurId: string | null
  }

  export type CaveMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    utilisateurId: string | null
  }

  export type CaveCountAggregateOutputType = {
    id: number
    nom: number
    utilisateurId: number
    _all: number
  }


  export type CaveMinAggregateInputType = {
    id?: true
    nom?: true
    utilisateurId?: true
  }

  export type CaveMaxAggregateInputType = {
    id?: true
    nom?: true
    utilisateurId?: true
  }

  export type CaveCountAggregateInputType = {
    id?: true
    nom?: true
    utilisateurId?: true
    _all?: true
  }

  export type CaveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cave to aggregate.
     */
    where?: CaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Caves to fetch.
     */
    orderBy?: CaveOrderByWithRelationInput | CaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Caves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Caves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Caves
    **/
    _count?: true | CaveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CaveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CaveMaxAggregateInputType
  }

  export type GetCaveAggregateType<T extends CaveAggregateArgs> = {
        [P in keyof T & keyof AggregateCave]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCave[P]>
      : GetScalarType<T[P], AggregateCave[P]>
  }




  export type CaveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaveWhereInput
    orderBy?: CaveOrderByWithAggregationInput | CaveOrderByWithAggregationInput[]
    by: CaveScalarFieldEnum[] | CaveScalarFieldEnum
    having?: CaveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CaveCountAggregateInputType | true
    _min?: CaveMinAggregateInputType
    _max?: CaveMaxAggregateInputType
  }

  export type CaveGroupByOutputType = {
    id: string
    nom: string
    utilisateurId: string
    _count: CaveCountAggregateOutputType | null
    _min: CaveMinAggregateOutputType | null
    _max: CaveMaxAggregateOutputType | null
  }

  type GetCaveGroupByPayload<T extends CaveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CaveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CaveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CaveGroupByOutputType[P]>
            : GetScalarType<T[P], CaveGroupByOutputType[P]>
        }
      >
    >


  export type CaveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    utilisateurId?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    vins?: boolean | Cave$vinsArgs<ExtArgs>
    avis?: boolean | Cave$avisArgs<ExtArgs>
    CaveVin?: boolean | Cave$CaveVinArgs<ExtArgs>
    _count?: boolean | CaveCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cave"]>

  export type CaveSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    utilisateurId?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cave"]>

  export type CaveSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    utilisateurId?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cave"]>

  export type CaveSelectScalar = {
    id?: boolean
    nom?: boolean
    utilisateurId?: boolean
  }

  export type CaveOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "utilisateurId", ExtArgs["result"]["cave"]>
  export type CaveInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    vins?: boolean | Cave$vinsArgs<ExtArgs>
    avis?: boolean | Cave$avisArgs<ExtArgs>
    CaveVin?: boolean | Cave$CaveVinArgs<ExtArgs>
    _count?: boolean | CaveCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CaveIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }
  export type CaveIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }

  export type $CavePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cave"
    objects: {
      utilisateur: Prisma.$UtilisateurPayload<ExtArgs>
      vins: Prisma.$VinPayload<ExtArgs>[]
      avis: Prisma.$AvisPayload<ExtArgs>[]
      CaveVin: Prisma.$CaveVinPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string
      utilisateurId: string
    }, ExtArgs["result"]["cave"]>
    composites: {}
  }

  type CaveGetPayload<S extends boolean | null | undefined | CaveDefaultArgs> = $Result.GetResult<Prisma.$CavePayload, S>

  type CaveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CaveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CaveCountAggregateInputType | true
    }

  export interface CaveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cave'], meta: { name: 'Cave' } }
    /**
     * Find zero or one Cave that matches the filter.
     * @param {CaveFindUniqueArgs} args - Arguments to find a Cave
     * @example
     * // Get one Cave
     * const cave = await prisma.cave.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CaveFindUniqueArgs>(args: SelectSubset<T, CaveFindUniqueArgs<ExtArgs>>): Prisma__CaveClient<$Result.GetResult<Prisma.$CavePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cave that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CaveFindUniqueOrThrowArgs} args - Arguments to find a Cave
     * @example
     * // Get one Cave
     * const cave = await prisma.cave.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CaveFindUniqueOrThrowArgs>(args: SelectSubset<T, CaveFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CaveClient<$Result.GetResult<Prisma.$CavePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cave that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaveFindFirstArgs} args - Arguments to find a Cave
     * @example
     * // Get one Cave
     * const cave = await prisma.cave.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CaveFindFirstArgs>(args?: SelectSubset<T, CaveFindFirstArgs<ExtArgs>>): Prisma__CaveClient<$Result.GetResult<Prisma.$CavePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cave that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaveFindFirstOrThrowArgs} args - Arguments to find a Cave
     * @example
     * // Get one Cave
     * const cave = await prisma.cave.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CaveFindFirstOrThrowArgs>(args?: SelectSubset<T, CaveFindFirstOrThrowArgs<ExtArgs>>): Prisma__CaveClient<$Result.GetResult<Prisma.$CavePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Caves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Caves
     * const caves = await prisma.cave.findMany()
     * 
     * // Get first 10 Caves
     * const caves = await prisma.cave.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const caveWithIdOnly = await prisma.cave.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CaveFindManyArgs>(args?: SelectSubset<T, CaveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CavePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cave.
     * @param {CaveCreateArgs} args - Arguments to create a Cave.
     * @example
     * // Create one Cave
     * const Cave = await prisma.cave.create({
     *   data: {
     *     // ... data to create a Cave
     *   }
     * })
     * 
     */
    create<T extends CaveCreateArgs>(args: SelectSubset<T, CaveCreateArgs<ExtArgs>>): Prisma__CaveClient<$Result.GetResult<Prisma.$CavePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Caves.
     * @param {CaveCreateManyArgs} args - Arguments to create many Caves.
     * @example
     * // Create many Caves
     * const cave = await prisma.cave.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CaveCreateManyArgs>(args?: SelectSubset<T, CaveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Caves and returns the data saved in the database.
     * @param {CaveCreateManyAndReturnArgs} args - Arguments to create many Caves.
     * @example
     * // Create many Caves
     * const cave = await prisma.cave.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Caves and only return the `id`
     * const caveWithIdOnly = await prisma.cave.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CaveCreateManyAndReturnArgs>(args?: SelectSubset<T, CaveCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CavePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cave.
     * @param {CaveDeleteArgs} args - Arguments to delete one Cave.
     * @example
     * // Delete one Cave
     * const Cave = await prisma.cave.delete({
     *   where: {
     *     // ... filter to delete one Cave
     *   }
     * })
     * 
     */
    delete<T extends CaveDeleteArgs>(args: SelectSubset<T, CaveDeleteArgs<ExtArgs>>): Prisma__CaveClient<$Result.GetResult<Prisma.$CavePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cave.
     * @param {CaveUpdateArgs} args - Arguments to update one Cave.
     * @example
     * // Update one Cave
     * const cave = await prisma.cave.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CaveUpdateArgs>(args: SelectSubset<T, CaveUpdateArgs<ExtArgs>>): Prisma__CaveClient<$Result.GetResult<Prisma.$CavePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Caves.
     * @param {CaveDeleteManyArgs} args - Arguments to filter Caves to delete.
     * @example
     * // Delete a few Caves
     * const { count } = await prisma.cave.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CaveDeleteManyArgs>(args?: SelectSubset<T, CaveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Caves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Caves
     * const cave = await prisma.cave.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CaveUpdateManyArgs>(args: SelectSubset<T, CaveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Caves and returns the data updated in the database.
     * @param {CaveUpdateManyAndReturnArgs} args - Arguments to update many Caves.
     * @example
     * // Update many Caves
     * const cave = await prisma.cave.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Caves and only return the `id`
     * const caveWithIdOnly = await prisma.cave.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CaveUpdateManyAndReturnArgs>(args: SelectSubset<T, CaveUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CavePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cave.
     * @param {CaveUpsertArgs} args - Arguments to update or create a Cave.
     * @example
     * // Update or create a Cave
     * const cave = await prisma.cave.upsert({
     *   create: {
     *     // ... data to create a Cave
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cave we want to update
     *   }
     * })
     */
    upsert<T extends CaveUpsertArgs>(args: SelectSubset<T, CaveUpsertArgs<ExtArgs>>): Prisma__CaveClient<$Result.GetResult<Prisma.$CavePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Caves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaveCountArgs} args - Arguments to filter Caves to count.
     * @example
     * // Count the number of Caves
     * const count = await prisma.cave.count({
     *   where: {
     *     // ... the filter for the Caves we want to count
     *   }
     * })
    **/
    count<T extends CaveCountArgs>(
      args?: Subset<T, CaveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CaveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cave.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CaveAggregateArgs>(args: Subset<T, CaveAggregateArgs>): Prisma.PrismaPromise<GetCaveAggregateType<T>>

    /**
     * Group by Cave.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaveGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CaveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CaveGroupByArgs['orderBy'] }
        : { orderBy?: CaveGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CaveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCaveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cave model
   */
  readonly fields: CaveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cave.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CaveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    utilisateur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vins<T extends Cave$vinsArgs<ExtArgs> = {}>(args?: Subset<T, Cave$vinsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    avis<T extends Cave$avisArgs<ExtArgs> = {}>(args?: Subset<T, Cave$avisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CaveVin<T extends Cave$CaveVinArgs<ExtArgs> = {}>(args?: Subset<T, Cave$CaveVinArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaveVinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cave model
   */
  interface CaveFieldRefs {
    readonly id: FieldRef<"Cave", 'String'>
    readonly nom: FieldRef<"Cave", 'String'>
    readonly utilisateurId: FieldRef<"Cave", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cave findUnique
   */
  export type CaveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cave
     */
    select?: CaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cave
     */
    omit?: CaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaveInclude<ExtArgs> | null
    /**
     * Filter, which Cave to fetch.
     */
    where: CaveWhereUniqueInput
  }

  /**
   * Cave findUniqueOrThrow
   */
  export type CaveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cave
     */
    select?: CaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cave
     */
    omit?: CaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaveInclude<ExtArgs> | null
    /**
     * Filter, which Cave to fetch.
     */
    where: CaveWhereUniqueInput
  }

  /**
   * Cave findFirst
   */
  export type CaveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cave
     */
    select?: CaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cave
     */
    omit?: CaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaveInclude<ExtArgs> | null
    /**
     * Filter, which Cave to fetch.
     */
    where?: CaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Caves to fetch.
     */
    orderBy?: CaveOrderByWithRelationInput | CaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Caves.
     */
    cursor?: CaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Caves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Caves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Caves.
     */
    distinct?: CaveScalarFieldEnum | CaveScalarFieldEnum[]
  }

  /**
   * Cave findFirstOrThrow
   */
  export type CaveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cave
     */
    select?: CaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cave
     */
    omit?: CaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaveInclude<ExtArgs> | null
    /**
     * Filter, which Cave to fetch.
     */
    where?: CaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Caves to fetch.
     */
    orderBy?: CaveOrderByWithRelationInput | CaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Caves.
     */
    cursor?: CaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Caves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Caves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Caves.
     */
    distinct?: CaveScalarFieldEnum | CaveScalarFieldEnum[]
  }

  /**
   * Cave findMany
   */
  export type CaveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cave
     */
    select?: CaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cave
     */
    omit?: CaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaveInclude<ExtArgs> | null
    /**
     * Filter, which Caves to fetch.
     */
    where?: CaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Caves to fetch.
     */
    orderBy?: CaveOrderByWithRelationInput | CaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Caves.
     */
    cursor?: CaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Caves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Caves.
     */
    skip?: number
    distinct?: CaveScalarFieldEnum | CaveScalarFieldEnum[]
  }

  /**
   * Cave create
   */
  export type CaveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cave
     */
    select?: CaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cave
     */
    omit?: CaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaveInclude<ExtArgs> | null
    /**
     * The data needed to create a Cave.
     */
    data: XOR<CaveCreateInput, CaveUncheckedCreateInput>
  }

  /**
   * Cave createMany
   */
  export type CaveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Caves.
     */
    data: CaveCreateManyInput | CaveCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cave createManyAndReturn
   */
  export type CaveCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cave
     */
    select?: CaveSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cave
     */
    omit?: CaveOmit<ExtArgs> | null
    /**
     * The data used to create many Caves.
     */
    data: CaveCreateManyInput | CaveCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaveIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cave update
   */
  export type CaveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cave
     */
    select?: CaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cave
     */
    omit?: CaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaveInclude<ExtArgs> | null
    /**
     * The data needed to update a Cave.
     */
    data: XOR<CaveUpdateInput, CaveUncheckedUpdateInput>
    /**
     * Choose, which Cave to update.
     */
    where: CaveWhereUniqueInput
  }

  /**
   * Cave updateMany
   */
  export type CaveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Caves.
     */
    data: XOR<CaveUpdateManyMutationInput, CaveUncheckedUpdateManyInput>
    /**
     * Filter which Caves to update
     */
    where?: CaveWhereInput
    /**
     * Limit how many Caves to update.
     */
    limit?: number
  }

  /**
   * Cave updateManyAndReturn
   */
  export type CaveUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cave
     */
    select?: CaveSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cave
     */
    omit?: CaveOmit<ExtArgs> | null
    /**
     * The data used to update Caves.
     */
    data: XOR<CaveUpdateManyMutationInput, CaveUncheckedUpdateManyInput>
    /**
     * Filter which Caves to update
     */
    where?: CaveWhereInput
    /**
     * Limit how many Caves to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaveIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cave upsert
   */
  export type CaveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cave
     */
    select?: CaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cave
     */
    omit?: CaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaveInclude<ExtArgs> | null
    /**
     * The filter to search for the Cave to update in case it exists.
     */
    where: CaveWhereUniqueInput
    /**
     * In case the Cave found by the `where` argument doesn't exist, create a new Cave with this data.
     */
    create: XOR<CaveCreateInput, CaveUncheckedCreateInput>
    /**
     * In case the Cave was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CaveUpdateInput, CaveUncheckedUpdateInput>
  }

  /**
   * Cave delete
   */
  export type CaveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cave
     */
    select?: CaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cave
     */
    omit?: CaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaveInclude<ExtArgs> | null
    /**
     * Filter which Cave to delete.
     */
    where: CaveWhereUniqueInput
  }

  /**
   * Cave deleteMany
   */
  export type CaveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Caves to delete
     */
    where?: CaveWhereInput
    /**
     * Limit how many Caves to delete.
     */
    limit?: number
  }

  /**
   * Cave.vins
   */
  export type Cave$vinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vin
     */
    select?: VinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vin
     */
    omit?: VinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VinInclude<ExtArgs> | null
    where?: VinWhereInput
    orderBy?: VinOrderByWithRelationInput | VinOrderByWithRelationInput[]
    cursor?: VinWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VinScalarFieldEnum | VinScalarFieldEnum[]
  }

  /**
   * Cave.avis
   */
  export type Cave$avisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
    where?: AvisWhereInput
    orderBy?: AvisOrderByWithRelationInput | AvisOrderByWithRelationInput[]
    cursor?: AvisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvisScalarFieldEnum | AvisScalarFieldEnum[]
  }

  /**
   * Cave.CaveVin
   */
  export type Cave$CaveVinArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaveVin
     */
    select?: CaveVinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaveVin
     */
    omit?: CaveVinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaveVinInclude<ExtArgs> | null
    where?: CaveVinWhereInput
    orderBy?: CaveVinOrderByWithRelationInput | CaveVinOrderByWithRelationInput[]
    cursor?: CaveVinWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CaveVinScalarFieldEnum | CaveVinScalarFieldEnum[]
  }

  /**
   * Cave without action
   */
  export type CaveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cave
     */
    select?: CaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cave
     */
    omit?: CaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaveInclude<ExtArgs> | null
  }


  /**
   * Model Avis
   */

  export type AggregateAvis = {
    _count: AvisCountAggregateOutputType | null
    _avg: AvisAvgAggregateOutputType | null
    _sum: AvisSumAggregateOutputType | null
    _min: AvisMinAggregateOutputType | null
    _max: AvisMaxAggregateOutputType | null
  }

  export type AvisAvgAggregateOutputType = {
    note: number | null
  }

  export type AvisSumAggregateOutputType = {
    note: number | null
  }

  export type AvisMinAggregateOutputType = {
    id: string | null
    note: number | null
    commentaire: string | null
    vinId: string | null
    caveId: string | null
  }

  export type AvisMaxAggregateOutputType = {
    id: string | null
    note: number | null
    commentaire: string | null
    vinId: string | null
    caveId: string | null
  }

  export type AvisCountAggregateOutputType = {
    id: number
    note: number
    commentaire: number
    vinId: number
    caveId: number
    _all: number
  }


  export type AvisAvgAggregateInputType = {
    note?: true
  }

  export type AvisSumAggregateInputType = {
    note?: true
  }

  export type AvisMinAggregateInputType = {
    id?: true
    note?: true
    commentaire?: true
    vinId?: true
    caveId?: true
  }

  export type AvisMaxAggregateInputType = {
    id?: true
    note?: true
    commentaire?: true
    vinId?: true
    caveId?: true
  }

  export type AvisCountAggregateInputType = {
    id?: true
    note?: true
    commentaire?: true
    vinId?: true
    caveId?: true
    _all?: true
  }

  export type AvisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avis to aggregate.
     */
    where?: AvisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avis to fetch.
     */
    orderBy?: AvisOrderByWithRelationInput | AvisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Avis
    **/
    _count?: true | AvisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvisMaxAggregateInputType
  }

  export type GetAvisAggregateType<T extends AvisAggregateArgs> = {
        [P in keyof T & keyof AggregateAvis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvis[P]>
      : GetScalarType<T[P], AggregateAvis[P]>
  }




  export type AvisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvisWhereInput
    orderBy?: AvisOrderByWithAggregationInput | AvisOrderByWithAggregationInput[]
    by: AvisScalarFieldEnum[] | AvisScalarFieldEnum
    having?: AvisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvisCountAggregateInputType | true
    _avg?: AvisAvgAggregateInputType
    _sum?: AvisSumAggregateInputType
    _min?: AvisMinAggregateInputType
    _max?: AvisMaxAggregateInputType
  }

  export type AvisGroupByOutputType = {
    id: string
    note: number
    commentaire: string | null
    vinId: string
    caveId: string | null
    _count: AvisCountAggregateOutputType | null
    _avg: AvisAvgAggregateOutputType | null
    _sum: AvisSumAggregateOutputType | null
    _min: AvisMinAggregateOutputType | null
    _max: AvisMaxAggregateOutputType | null
  }

  type GetAvisGroupByPayload<T extends AvisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvisGroupByOutputType[P]>
            : GetScalarType<T[P], AvisGroupByOutputType[P]>
        }
      >
    >


  export type AvisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    note?: boolean
    commentaire?: boolean
    vinId?: boolean
    caveId?: boolean
    vin?: boolean | VinDefaultArgs<ExtArgs>
    cave?: boolean | Avis$caveArgs<ExtArgs>
  }, ExtArgs["result"]["avis"]>

  export type AvisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    note?: boolean
    commentaire?: boolean
    vinId?: boolean
    caveId?: boolean
    vin?: boolean | VinDefaultArgs<ExtArgs>
    cave?: boolean | Avis$caveArgs<ExtArgs>
  }, ExtArgs["result"]["avis"]>

  export type AvisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    note?: boolean
    commentaire?: boolean
    vinId?: boolean
    caveId?: boolean
    vin?: boolean | VinDefaultArgs<ExtArgs>
    cave?: boolean | Avis$caveArgs<ExtArgs>
  }, ExtArgs["result"]["avis"]>

  export type AvisSelectScalar = {
    id?: boolean
    note?: boolean
    commentaire?: boolean
    vinId?: boolean
    caveId?: boolean
  }

  export type AvisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "note" | "commentaire" | "vinId" | "caveId", ExtArgs["result"]["avis"]>
  export type AvisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vin?: boolean | VinDefaultArgs<ExtArgs>
    cave?: boolean | Avis$caveArgs<ExtArgs>
  }
  export type AvisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vin?: boolean | VinDefaultArgs<ExtArgs>
    cave?: boolean | Avis$caveArgs<ExtArgs>
  }
  export type AvisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vin?: boolean | VinDefaultArgs<ExtArgs>
    cave?: boolean | Avis$caveArgs<ExtArgs>
  }

  export type $AvisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Avis"
    objects: {
      vin: Prisma.$VinPayload<ExtArgs>
      cave: Prisma.$CavePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      note: number
      commentaire: string | null
      vinId: string
      caveId: string | null
    }, ExtArgs["result"]["avis"]>
    composites: {}
  }

  type AvisGetPayload<S extends boolean | null | undefined | AvisDefaultArgs> = $Result.GetResult<Prisma.$AvisPayload, S>

  type AvisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvisCountAggregateInputType | true
    }

  export interface AvisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Avis'], meta: { name: 'Avis' } }
    /**
     * Find zero or one Avis that matches the filter.
     * @param {AvisFindUniqueArgs} args - Arguments to find a Avis
     * @example
     * // Get one Avis
     * const avis = await prisma.avis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvisFindUniqueArgs>(args: SelectSubset<T, AvisFindUniqueArgs<ExtArgs>>): Prisma__AvisClient<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Avis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvisFindUniqueOrThrowArgs} args - Arguments to find a Avis
     * @example
     * // Get one Avis
     * const avis = await prisma.avis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvisFindUniqueOrThrowArgs>(args: SelectSubset<T, AvisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvisClient<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvisFindFirstArgs} args - Arguments to find a Avis
     * @example
     * // Get one Avis
     * const avis = await prisma.avis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvisFindFirstArgs>(args?: SelectSubset<T, AvisFindFirstArgs<ExtArgs>>): Prisma__AvisClient<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvisFindFirstOrThrowArgs} args - Arguments to find a Avis
     * @example
     * // Get one Avis
     * const avis = await prisma.avis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvisFindFirstOrThrowArgs>(args?: SelectSubset<T, AvisFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvisClient<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Avis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avis
     * const avis = await prisma.avis.findMany()
     * 
     * // Get first 10 Avis
     * const avis = await prisma.avis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const avisWithIdOnly = await prisma.avis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvisFindManyArgs>(args?: SelectSubset<T, AvisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Avis.
     * @param {AvisCreateArgs} args - Arguments to create a Avis.
     * @example
     * // Create one Avis
     * const Avis = await prisma.avis.create({
     *   data: {
     *     // ... data to create a Avis
     *   }
     * })
     * 
     */
    create<T extends AvisCreateArgs>(args: SelectSubset<T, AvisCreateArgs<ExtArgs>>): Prisma__AvisClient<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Avis.
     * @param {AvisCreateManyArgs} args - Arguments to create many Avis.
     * @example
     * // Create many Avis
     * const avis = await prisma.avis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvisCreateManyArgs>(args?: SelectSubset<T, AvisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Avis and returns the data saved in the database.
     * @param {AvisCreateManyAndReturnArgs} args - Arguments to create many Avis.
     * @example
     * // Create many Avis
     * const avis = await prisma.avis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Avis and only return the `id`
     * const avisWithIdOnly = await prisma.avis.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvisCreateManyAndReturnArgs>(args?: SelectSubset<T, AvisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Avis.
     * @param {AvisDeleteArgs} args - Arguments to delete one Avis.
     * @example
     * // Delete one Avis
     * const Avis = await prisma.avis.delete({
     *   where: {
     *     // ... filter to delete one Avis
     *   }
     * })
     * 
     */
    delete<T extends AvisDeleteArgs>(args: SelectSubset<T, AvisDeleteArgs<ExtArgs>>): Prisma__AvisClient<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Avis.
     * @param {AvisUpdateArgs} args - Arguments to update one Avis.
     * @example
     * // Update one Avis
     * const avis = await prisma.avis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvisUpdateArgs>(args: SelectSubset<T, AvisUpdateArgs<ExtArgs>>): Prisma__AvisClient<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Avis.
     * @param {AvisDeleteManyArgs} args - Arguments to filter Avis to delete.
     * @example
     * // Delete a few Avis
     * const { count } = await prisma.avis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvisDeleteManyArgs>(args?: SelectSubset<T, AvisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avis
     * const avis = await prisma.avis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvisUpdateManyArgs>(args: SelectSubset<T, AvisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avis and returns the data updated in the database.
     * @param {AvisUpdateManyAndReturnArgs} args - Arguments to update many Avis.
     * @example
     * // Update many Avis
     * const avis = await prisma.avis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Avis and only return the `id`
     * const avisWithIdOnly = await prisma.avis.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AvisUpdateManyAndReturnArgs>(args: SelectSubset<T, AvisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Avis.
     * @param {AvisUpsertArgs} args - Arguments to update or create a Avis.
     * @example
     * // Update or create a Avis
     * const avis = await prisma.avis.upsert({
     *   create: {
     *     // ... data to create a Avis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avis we want to update
     *   }
     * })
     */
    upsert<T extends AvisUpsertArgs>(args: SelectSubset<T, AvisUpsertArgs<ExtArgs>>): Prisma__AvisClient<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Avis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvisCountArgs} args - Arguments to filter Avis to count.
     * @example
     * // Count the number of Avis
     * const count = await prisma.avis.count({
     *   where: {
     *     // ... the filter for the Avis we want to count
     *   }
     * })
    **/
    count<T extends AvisCountArgs>(
      args?: Subset<T, AvisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Avis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AvisAggregateArgs>(args: Subset<T, AvisAggregateArgs>): Prisma.PrismaPromise<GetAvisAggregateType<T>>

    /**
     * Group by Avis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvisGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AvisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvisGroupByArgs['orderBy'] }
        : { orderBy?: AvisGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AvisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Avis model
   */
  readonly fields: AvisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Avis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vin<T extends VinDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VinDefaultArgs<ExtArgs>>): Prisma__VinClient<$Result.GetResult<Prisma.$VinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cave<T extends Avis$caveArgs<ExtArgs> = {}>(args?: Subset<T, Avis$caveArgs<ExtArgs>>): Prisma__CaveClient<$Result.GetResult<Prisma.$CavePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Avis model
   */
  interface AvisFieldRefs {
    readonly id: FieldRef<"Avis", 'String'>
    readonly note: FieldRef<"Avis", 'Int'>
    readonly commentaire: FieldRef<"Avis", 'String'>
    readonly vinId: FieldRef<"Avis", 'String'>
    readonly caveId: FieldRef<"Avis", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Avis findUnique
   */
  export type AvisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
    /**
     * Filter, which Avis to fetch.
     */
    where: AvisWhereUniqueInput
  }

  /**
   * Avis findUniqueOrThrow
   */
  export type AvisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
    /**
     * Filter, which Avis to fetch.
     */
    where: AvisWhereUniqueInput
  }

  /**
   * Avis findFirst
   */
  export type AvisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
    /**
     * Filter, which Avis to fetch.
     */
    where?: AvisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avis to fetch.
     */
    orderBy?: AvisOrderByWithRelationInput | AvisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avis.
     */
    cursor?: AvisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avis.
     */
    distinct?: AvisScalarFieldEnum | AvisScalarFieldEnum[]
  }

  /**
   * Avis findFirstOrThrow
   */
  export type AvisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
    /**
     * Filter, which Avis to fetch.
     */
    where?: AvisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avis to fetch.
     */
    orderBy?: AvisOrderByWithRelationInput | AvisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avis.
     */
    cursor?: AvisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avis.
     */
    distinct?: AvisScalarFieldEnum | AvisScalarFieldEnum[]
  }

  /**
   * Avis findMany
   */
  export type AvisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
    /**
     * Filter, which Avis to fetch.
     */
    where?: AvisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avis to fetch.
     */
    orderBy?: AvisOrderByWithRelationInput | AvisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Avis.
     */
    cursor?: AvisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avis.
     */
    skip?: number
    distinct?: AvisScalarFieldEnum | AvisScalarFieldEnum[]
  }

  /**
   * Avis create
   */
  export type AvisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
    /**
     * The data needed to create a Avis.
     */
    data: XOR<AvisCreateInput, AvisUncheckedCreateInput>
  }

  /**
   * Avis createMany
   */
  export type AvisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Avis.
     */
    data: AvisCreateManyInput | AvisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Avis createManyAndReturn
   */
  export type AvisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * The data used to create many Avis.
     */
    data: AvisCreateManyInput | AvisCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Avis update
   */
  export type AvisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
    /**
     * The data needed to update a Avis.
     */
    data: XOR<AvisUpdateInput, AvisUncheckedUpdateInput>
    /**
     * Choose, which Avis to update.
     */
    where: AvisWhereUniqueInput
  }

  /**
   * Avis updateMany
   */
  export type AvisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Avis.
     */
    data: XOR<AvisUpdateManyMutationInput, AvisUncheckedUpdateManyInput>
    /**
     * Filter which Avis to update
     */
    where?: AvisWhereInput
    /**
     * Limit how many Avis to update.
     */
    limit?: number
  }

  /**
   * Avis updateManyAndReturn
   */
  export type AvisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * The data used to update Avis.
     */
    data: XOR<AvisUpdateManyMutationInput, AvisUncheckedUpdateManyInput>
    /**
     * Filter which Avis to update
     */
    where?: AvisWhereInput
    /**
     * Limit how many Avis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Avis upsert
   */
  export type AvisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
    /**
     * The filter to search for the Avis to update in case it exists.
     */
    where: AvisWhereUniqueInput
    /**
     * In case the Avis found by the `where` argument doesn't exist, create a new Avis with this data.
     */
    create: XOR<AvisCreateInput, AvisUncheckedCreateInput>
    /**
     * In case the Avis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvisUpdateInput, AvisUncheckedUpdateInput>
  }

  /**
   * Avis delete
   */
  export type AvisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
    /**
     * Filter which Avis to delete.
     */
    where: AvisWhereUniqueInput
  }

  /**
   * Avis deleteMany
   */
  export type AvisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avis to delete
     */
    where?: AvisWhereInput
    /**
     * Limit how many Avis to delete.
     */
    limit?: number
  }

  /**
   * Avis.cave
   */
  export type Avis$caveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cave
     */
    select?: CaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cave
     */
    omit?: CaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaveInclude<ExtArgs> | null
    where?: CaveWhereInput
  }

  /**
   * Avis without action
   */
  export type AvisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
  }


  /**
   * Model CaveVin
   */

  export type AggregateCaveVin = {
    _count: CaveVinCountAggregateOutputType | null
    _min: CaveVinMinAggregateOutputType | null
    _max: CaveVinMaxAggregateOutputType | null
  }

  export type CaveVinMinAggregateOutputType = {
    caveId: string | null
    vinId: string | null
  }

  export type CaveVinMaxAggregateOutputType = {
    caveId: string | null
    vinId: string | null
  }

  export type CaveVinCountAggregateOutputType = {
    caveId: number
    vinId: number
    _all: number
  }


  export type CaveVinMinAggregateInputType = {
    caveId?: true
    vinId?: true
  }

  export type CaveVinMaxAggregateInputType = {
    caveId?: true
    vinId?: true
  }

  export type CaveVinCountAggregateInputType = {
    caveId?: true
    vinId?: true
    _all?: true
  }

  export type CaveVinAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CaveVin to aggregate.
     */
    where?: CaveVinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaveVins to fetch.
     */
    orderBy?: CaveVinOrderByWithRelationInput | CaveVinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CaveVinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaveVins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaveVins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CaveVins
    **/
    _count?: true | CaveVinCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CaveVinMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CaveVinMaxAggregateInputType
  }

  export type GetCaveVinAggregateType<T extends CaveVinAggregateArgs> = {
        [P in keyof T & keyof AggregateCaveVin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCaveVin[P]>
      : GetScalarType<T[P], AggregateCaveVin[P]>
  }




  export type CaveVinGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaveVinWhereInput
    orderBy?: CaveVinOrderByWithAggregationInput | CaveVinOrderByWithAggregationInput[]
    by: CaveVinScalarFieldEnum[] | CaveVinScalarFieldEnum
    having?: CaveVinScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CaveVinCountAggregateInputType | true
    _min?: CaveVinMinAggregateInputType
    _max?: CaveVinMaxAggregateInputType
  }

  export type CaveVinGroupByOutputType = {
    caveId: string
    vinId: string
    _count: CaveVinCountAggregateOutputType | null
    _min: CaveVinMinAggregateOutputType | null
    _max: CaveVinMaxAggregateOutputType | null
  }

  type GetCaveVinGroupByPayload<T extends CaveVinGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CaveVinGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CaveVinGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CaveVinGroupByOutputType[P]>
            : GetScalarType<T[P], CaveVinGroupByOutputType[P]>
        }
      >
    >


  export type CaveVinSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    caveId?: boolean
    vinId?: boolean
    cave?: boolean | CaveDefaultArgs<ExtArgs>
    vin?: boolean | VinDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caveVin"]>

  export type CaveVinSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    caveId?: boolean
    vinId?: boolean
    cave?: boolean | CaveDefaultArgs<ExtArgs>
    vin?: boolean | VinDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caveVin"]>

  export type CaveVinSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    caveId?: boolean
    vinId?: boolean
    cave?: boolean | CaveDefaultArgs<ExtArgs>
    vin?: boolean | VinDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caveVin"]>

  export type CaveVinSelectScalar = {
    caveId?: boolean
    vinId?: boolean
  }

  export type CaveVinOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"caveId" | "vinId", ExtArgs["result"]["caveVin"]>
  export type CaveVinInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cave?: boolean | CaveDefaultArgs<ExtArgs>
    vin?: boolean | VinDefaultArgs<ExtArgs>
  }
  export type CaveVinIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cave?: boolean | CaveDefaultArgs<ExtArgs>
    vin?: boolean | VinDefaultArgs<ExtArgs>
  }
  export type CaveVinIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cave?: boolean | CaveDefaultArgs<ExtArgs>
    vin?: boolean | VinDefaultArgs<ExtArgs>
  }

  export type $CaveVinPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CaveVin"
    objects: {
      cave: Prisma.$CavePayload<ExtArgs>
      vin: Prisma.$VinPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      caveId: string
      vinId: string
    }, ExtArgs["result"]["caveVin"]>
    composites: {}
  }

  type CaveVinGetPayload<S extends boolean | null | undefined | CaveVinDefaultArgs> = $Result.GetResult<Prisma.$CaveVinPayload, S>

  type CaveVinCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CaveVinFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CaveVinCountAggregateInputType | true
    }

  export interface CaveVinDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CaveVin'], meta: { name: 'CaveVin' } }
    /**
     * Find zero or one CaveVin that matches the filter.
     * @param {CaveVinFindUniqueArgs} args - Arguments to find a CaveVin
     * @example
     * // Get one CaveVin
     * const caveVin = await prisma.caveVin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CaveVinFindUniqueArgs>(args: SelectSubset<T, CaveVinFindUniqueArgs<ExtArgs>>): Prisma__CaveVinClient<$Result.GetResult<Prisma.$CaveVinPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CaveVin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CaveVinFindUniqueOrThrowArgs} args - Arguments to find a CaveVin
     * @example
     * // Get one CaveVin
     * const caveVin = await prisma.caveVin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CaveVinFindUniqueOrThrowArgs>(args: SelectSubset<T, CaveVinFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CaveVinClient<$Result.GetResult<Prisma.$CaveVinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CaveVin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaveVinFindFirstArgs} args - Arguments to find a CaveVin
     * @example
     * // Get one CaveVin
     * const caveVin = await prisma.caveVin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CaveVinFindFirstArgs>(args?: SelectSubset<T, CaveVinFindFirstArgs<ExtArgs>>): Prisma__CaveVinClient<$Result.GetResult<Prisma.$CaveVinPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CaveVin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaveVinFindFirstOrThrowArgs} args - Arguments to find a CaveVin
     * @example
     * // Get one CaveVin
     * const caveVin = await prisma.caveVin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CaveVinFindFirstOrThrowArgs>(args?: SelectSubset<T, CaveVinFindFirstOrThrowArgs<ExtArgs>>): Prisma__CaveVinClient<$Result.GetResult<Prisma.$CaveVinPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CaveVins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaveVinFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CaveVins
     * const caveVins = await prisma.caveVin.findMany()
     * 
     * // Get first 10 CaveVins
     * const caveVins = await prisma.caveVin.findMany({ take: 10 })
     * 
     * // Only select the `caveId`
     * const caveVinWithCaveIdOnly = await prisma.caveVin.findMany({ select: { caveId: true } })
     * 
     */
    findMany<T extends CaveVinFindManyArgs>(args?: SelectSubset<T, CaveVinFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaveVinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CaveVin.
     * @param {CaveVinCreateArgs} args - Arguments to create a CaveVin.
     * @example
     * // Create one CaveVin
     * const CaveVin = await prisma.caveVin.create({
     *   data: {
     *     // ... data to create a CaveVin
     *   }
     * })
     * 
     */
    create<T extends CaveVinCreateArgs>(args: SelectSubset<T, CaveVinCreateArgs<ExtArgs>>): Prisma__CaveVinClient<$Result.GetResult<Prisma.$CaveVinPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CaveVins.
     * @param {CaveVinCreateManyArgs} args - Arguments to create many CaveVins.
     * @example
     * // Create many CaveVins
     * const caveVin = await prisma.caveVin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CaveVinCreateManyArgs>(args?: SelectSubset<T, CaveVinCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CaveVins and returns the data saved in the database.
     * @param {CaveVinCreateManyAndReturnArgs} args - Arguments to create many CaveVins.
     * @example
     * // Create many CaveVins
     * const caveVin = await prisma.caveVin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CaveVins and only return the `caveId`
     * const caveVinWithCaveIdOnly = await prisma.caveVin.createManyAndReturn({
     *   select: { caveId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CaveVinCreateManyAndReturnArgs>(args?: SelectSubset<T, CaveVinCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaveVinPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CaveVin.
     * @param {CaveVinDeleteArgs} args - Arguments to delete one CaveVin.
     * @example
     * // Delete one CaveVin
     * const CaveVin = await prisma.caveVin.delete({
     *   where: {
     *     // ... filter to delete one CaveVin
     *   }
     * })
     * 
     */
    delete<T extends CaveVinDeleteArgs>(args: SelectSubset<T, CaveVinDeleteArgs<ExtArgs>>): Prisma__CaveVinClient<$Result.GetResult<Prisma.$CaveVinPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CaveVin.
     * @param {CaveVinUpdateArgs} args - Arguments to update one CaveVin.
     * @example
     * // Update one CaveVin
     * const caveVin = await prisma.caveVin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CaveVinUpdateArgs>(args: SelectSubset<T, CaveVinUpdateArgs<ExtArgs>>): Prisma__CaveVinClient<$Result.GetResult<Prisma.$CaveVinPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CaveVins.
     * @param {CaveVinDeleteManyArgs} args - Arguments to filter CaveVins to delete.
     * @example
     * // Delete a few CaveVins
     * const { count } = await prisma.caveVin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CaveVinDeleteManyArgs>(args?: SelectSubset<T, CaveVinDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CaveVins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaveVinUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CaveVins
     * const caveVin = await prisma.caveVin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CaveVinUpdateManyArgs>(args: SelectSubset<T, CaveVinUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CaveVins and returns the data updated in the database.
     * @param {CaveVinUpdateManyAndReturnArgs} args - Arguments to update many CaveVins.
     * @example
     * // Update many CaveVins
     * const caveVin = await prisma.caveVin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CaveVins and only return the `caveId`
     * const caveVinWithCaveIdOnly = await prisma.caveVin.updateManyAndReturn({
     *   select: { caveId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CaveVinUpdateManyAndReturnArgs>(args: SelectSubset<T, CaveVinUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaveVinPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CaveVin.
     * @param {CaveVinUpsertArgs} args - Arguments to update or create a CaveVin.
     * @example
     * // Update or create a CaveVin
     * const caveVin = await prisma.caveVin.upsert({
     *   create: {
     *     // ... data to create a CaveVin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CaveVin we want to update
     *   }
     * })
     */
    upsert<T extends CaveVinUpsertArgs>(args: SelectSubset<T, CaveVinUpsertArgs<ExtArgs>>): Prisma__CaveVinClient<$Result.GetResult<Prisma.$CaveVinPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CaveVins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaveVinCountArgs} args - Arguments to filter CaveVins to count.
     * @example
     * // Count the number of CaveVins
     * const count = await prisma.caveVin.count({
     *   where: {
     *     // ... the filter for the CaveVins we want to count
     *   }
     * })
    **/
    count<T extends CaveVinCountArgs>(
      args?: Subset<T, CaveVinCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CaveVinCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CaveVin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaveVinAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CaveVinAggregateArgs>(args: Subset<T, CaveVinAggregateArgs>): Prisma.PrismaPromise<GetCaveVinAggregateType<T>>

    /**
     * Group by CaveVin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaveVinGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CaveVinGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CaveVinGroupByArgs['orderBy'] }
        : { orderBy?: CaveVinGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CaveVinGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCaveVinGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CaveVin model
   */
  readonly fields: CaveVinFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CaveVin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CaveVinClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cave<T extends CaveDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CaveDefaultArgs<ExtArgs>>): Prisma__CaveClient<$Result.GetResult<Prisma.$CavePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vin<T extends VinDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VinDefaultArgs<ExtArgs>>): Prisma__VinClient<$Result.GetResult<Prisma.$VinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CaveVin model
   */
  interface CaveVinFieldRefs {
    readonly caveId: FieldRef<"CaveVin", 'String'>
    readonly vinId: FieldRef<"CaveVin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CaveVin findUnique
   */
  export type CaveVinFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaveVin
     */
    select?: CaveVinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaveVin
     */
    omit?: CaveVinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaveVinInclude<ExtArgs> | null
    /**
     * Filter, which CaveVin to fetch.
     */
    where: CaveVinWhereUniqueInput
  }

  /**
   * CaveVin findUniqueOrThrow
   */
  export type CaveVinFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaveVin
     */
    select?: CaveVinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaveVin
     */
    omit?: CaveVinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaveVinInclude<ExtArgs> | null
    /**
     * Filter, which CaveVin to fetch.
     */
    where: CaveVinWhereUniqueInput
  }

  /**
   * CaveVin findFirst
   */
  export type CaveVinFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaveVin
     */
    select?: CaveVinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaveVin
     */
    omit?: CaveVinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaveVinInclude<ExtArgs> | null
    /**
     * Filter, which CaveVin to fetch.
     */
    where?: CaveVinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaveVins to fetch.
     */
    orderBy?: CaveVinOrderByWithRelationInput | CaveVinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CaveVins.
     */
    cursor?: CaveVinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaveVins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaveVins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CaveVins.
     */
    distinct?: CaveVinScalarFieldEnum | CaveVinScalarFieldEnum[]
  }

  /**
   * CaveVin findFirstOrThrow
   */
  export type CaveVinFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaveVin
     */
    select?: CaveVinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaveVin
     */
    omit?: CaveVinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaveVinInclude<ExtArgs> | null
    /**
     * Filter, which CaveVin to fetch.
     */
    where?: CaveVinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaveVins to fetch.
     */
    orderBy?: CaveVinOrderByWithRelationInput | CaveVinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CaveVins.
     */
    cursor?: CaveVinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaveVins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaveVins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CaveVins.
     */
    distinct?: CaveVinScalarFieldEnum | CaveVinScalarFieldEnum[]
  }

  /**
   * CaveVin findMany
   */
  export type CaveVinFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaveVin
     */
    select?: CaveVinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaveVin
     */
    omit?: CaveVinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaveVinInclude<ExtArgs> | null
    /**
     * Filter, which CaveVins to fetch.
     */
    where?: CaveVinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaveVins to fetch.
     */
    orderBy?: CaveVinOrderByWithRelationInput | CaveVinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CaveVins.
     */
    cursor?: CaveVinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaveVins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaveVins.
     */
    skip?: number
    distinct?: CaveVinScalarFieldEnum | CaveVinScalarFieldEnum[]
  }

  /**
   * CaveVin create
   */
  export type CaveVinCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaveVin
     */
    select?: CaveVinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaveVin
     */
    omit?: CaveVinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaveVinInclude<ExtArgs> | null
    /**
     * The data needed to create a CaveVin.
     */
    data: XOR<CaveVinCreateInput, CaveVinUncheckedCreateInput>
  }

  /**
   * CaveVin createMany
   */
  export type CaveVinCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CaveVins.
     */
    data: CaveVinCreateManyInput | CaveVinCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CaveVin createManyAndReturn
   */
  export type CaveVinCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaveVin
     */
    select?: CaveVinSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CaveVin
     */
    omit?: CaveVinOmit<ExtArgs> | null
    /**
     * The data used to create many CaveVins.
     */
    data: CaveVinCreateManyInput | CaveVinCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaveVinIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CaveVin update
   */
  export type CaveVinUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaveVin
     */
    select?: CaveVinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaveVin
     */
    omit?: CaveVinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaveVinInclude<ExtArgs> | null
    /**
     * The data needed to update a CaveVin.
     */
    data: XOR<CaveVinUpdateInput, CaveVinUncheckedUpdateInput>
    /**
     * Choose, which CaveVin to update.
     */
    where: CaveVinWhereUniqueInput
  }

  /**
   * CaveVin updateMany
   */
  export type CaveVinUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CaveVins.
     */
    data: XOR<CaveVinUpdateManyMutationInput, CaveVinUncheckedUpdateManyInput>
    /**
     * Filter which CaveVins to update
     */
    where?: CaveVinWhereInput
    /**
     * Limit how many CaveVins to update.
     */
    limit?: number
  }

  /**
   * CaveVin updateManyAndReturn
   */
  export type CaveVinUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaveVin
     */
    select?: CaveVinSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CaveVin
     */
    omit?: CaveVinOmit<ExtArgs> | null
    /**
     * The data used to update CaveVins.
     */
    data: XOR<CaveVinUpdateManyMutationInput, CaveVinUncheckedUpdateManyInput>
    /**
     * Filter which CaveVins to update
     */
    where?: CaveVinWhereInput
    /**
     * Limit how many CaveVins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaveVinIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CaveVin upsert
   */
  export type CaveVinUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaveVin
     */
    select?: CaveVinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaveVin
     */
    omit?: CaveVinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaveVinInclude<ExtArgs> | null
    /**
     * The filter to search for the CaveVin to update in case it exists.
     */
    where: CaveVinWhereUniqueInput
    /**
     * In case the CaveVin found by the `where` argument doesn't exist, create a new CaveVin with this data.
     */
    create: XOR<CaveVinCreateInput, CaveVinUncheckedCreateInput>
    /**
     * In case the CaveVin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CaveVinUpdateInput, CaveVinUncheckedUpdateInput>
  }

  /**
   * CaveVin delete
   */
  export type CaveVinDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaveVin
     */
    select?: CaveVinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaveVin
     */
    omit?: CaveVinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaveVinInclude<ExtArgs> | null
    /**
     * Filter which CaveVin to delete.
     */
    where: CaveVinWhereUniqueInput
  }

  /**
   * CaveVin deleteMany
   */
  export type CaveVinDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CaveVins to delete
     */
    where?: CaveVinWhereInput
    /**
     * Limit how many CaveVins to delete.
     */
    limit?: number
  }

  /**
   * CaveVin without action
   */
  export type CaveVinDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaveVin
     */
    select?: CaveVinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaveVin
     */
    omit?: CaveVinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaveVinInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UtilisateurScalarFieldEnum: {
    id: 'id',
    pseudonyme: 'pseudonyme',
    email: 'email',
    password: 'password'
  };

  export type UtilisateurScalarFieldEnum = (typeof UtilisateurScalarFieldEnum)[keyof typeof UtilisateurScalarFieldEnum]


  export const VinScalarFieldEnum: {
    id: 'id',
    couleur: 'couleur',
    annee: 'annee',
    appellation: 'appellation',
    nom: 'nom',
    quantite: 'quantite',
    is_consumed: 'is_consumed',
    favoris: 'favoris'
  };

  export type VinScalarFieldEnum = (typeof VinScalarFieldEnum)[keyof typeof VinScalarFieldEnum]


  export const CaveScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    utilisateurId: 'utilisateurId'
  };

  export type CaveScalarFieldEnum = (typeof CaveScalarFieldEnum)[keyof typeof CaveScalarFieldEnum]


  export const AvisScalarFieldEnum: {
    id: 'id',
    note: 'note',
    commentaire: 'commentaire',
    vinId: 'vinId',
    caveId: 'caveId'
  };

  export type AvisScalarFieldEnum = (typeof AvisScalarFieldEnum)[keyof typeof AvisScalarFieldEnum]


  export const CaveVinScalarFieldEnum: {
    caveId: 'caveId',
    vinId: 'vinId'
  };

  export type CaveVinScalarFieldEnum = (typeof CaveVinScalarFieldEnum)[keyof typeof CaveVinScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UtilisateurWhereInput = {
    AND?: UtilisateurWhereInput | UtilisateurWhereInput[]
    OR?: UtilisateurWhereInput[]
    NOT?: UtilisateurWhereInput | UtilisateurWhereInput[]
    id?: StringFilter<"Utilisateur"> | string
    pseudonyme?: StringFilter<"Utilisateur"> | string
    email?: StringFilter<"Utilisateur"> | string
    password?: StringFilter<"Utilisateur"> | string
    caves?: CaveListRelationFilter
  }

  export type UtilisateurOrderByWithRelationInput = {
    id?: SortOrder
    pseudonyme?: SortOrder
    email?: SortOrder
    password?: SortOrder
    caves?: CaveOrderByRelationAggregateInput
  }

  export type UtilisateurWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    pseudonyme?: string
    email?: string
    AND?: UtilisateurWhereInput | UtilisateurWhereInput[]
    OR?: UtilisateurWhereInput[]
    NOT?: UtilisateurWhereInput | UtilisateurWhereInput[]
    password?: StringFilter<"Utilisateur"> | string
    caves?: CaveListRelationFilter
  }, "id" | "pseudonyme" | "email">

  export type UtilisateurOrderByWithAggregationInput = {
    id?: SortOrder
    pseudonyme?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UtilisateurCountOrderByAggregateInput
    _max?: UtilisateurMaxOrderByAggregateInput
    _min?: UtilisateurMinOrderByAggregateInput
  }

  export type UtilisateurScalarWhereWithAggregatesInput = {
    AND?: UtilisateurScalarWhereWithAggregatesInput | UtilisateurScalarWhereWithAggregatesInput[]
    OR?: UtilisateurScalarWhereWithAggregatesInput[]
    NOT?: UtilisateurScalarWhereWithAggregatesInput | UtilisateurScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Utilisateur"> | string
    pseudonyme?: StringWithAggregatesFilter<"Utilisateur"> | string
    email?: StringWithAggregatesFilter<"Utilisateur"> | string
    password?: StringWithAggregatesFilter<"Utilisateur"> | string
  }

  export type VinWhereInput = {
    AND?: VinWhereInput | VinWhereInput[]
    OR?: VinWhereInput[]
    NOT?: VinWhereInput | VinWhereInput[]
    id?: StringFilter<"Vin"> | string
    couleur?: StringFilter<"Vin"> | string
    annee?: IntFilter<"Vin"> | number
    appellation?: StringNullableFilter<"Vin"> | string | null
    nom?: StringFilter<"Vin"> | string
    quantite?: IntFilter<"Vin"> | number
    is_consumed?: BoolFilter<"Vin"> | boolean
    favoris?: BoolFilter<"Vin"> | boolean
    avis?: AvisListRelationFilter
    caves?: CaveListRelationFilter
    caveVins?: CaveVinListRelationFilter
  }

  export type VinOrderByWithRelationInput = {
    id?: SortOrder
    couleur?: SortOrder
    annee?: SortOrder
    appellation?: SortOrderInput | SortOrder
    nom?: SortOrder
    quantite?: SortOrder
    is_consumed?: SortOrder
    favoris?: SortOrder
    avis?: AvisOrderByRelationAggregateInput
    caves?: CaveOrderByRelationAggregateInput
    caveVins?: CaveVinOrderByRelationAggregateInput
  }

  export type VinWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VinWhereInput | VinWhereInput[]
    OR?: VinWhereInput[]
    NOT?: VinWhereInput | VinWhereInput[]
    couleur?: StringFilter<"Vin"> | string
    annee?: IntFilter<"Vin"> | number
    appellation?: StringNullableFilter<"Vin"> | string | null
    nom?: StringFilter<"Vin"> | string
    quantite?: IntFilter<"Vin"> | number
    is_consumed?: BoolFilter<"Vin"> | boolean
    favoris?: BoolFilter<"Vin"> | boolean
    avis?: AvisListRelationFilter
    caves?: CaveListRelationFilter
    caveVins?: CaveVinListRelationFilter
  }, "id">

  export type VinOrderByWithAggregationInput = {
    id?: SortOrder
    couleur?: SortOrder
    annee?: SortOrder
    appellation?: SortOrderInput | SortOrder
    nom?: SortOrder
    quantite?: SortOrder
    is_consumed?: SortOrder
    favoris?: SortOrder
    _count?: VinCountOrderByAggregateInput
    _avg?: VinAvgOrderByAggregateInput
    _max?: VinMaxOrderByAggregateInput
    _min?: VinMinOrderByAggregateInput
    _sum?: VinSumOrderByAggregateInput
  }

  export type VinScalarWhereWithAggregatesInput = {
    AND?: VinScalarWhereWithAggregatesInput | VinScalarWhereWithAggregatesInput[]
    OR?: VinScalarWhereWithAggregatesInput[]
    NOT?: VinScalarWhereWithAggregatesInput | VinScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vin"> | string
    couleur?: StringWithAggregatesFilter<"Vin"> | string
    annee?: IntWithAggregatesFilter<"Vin"> | number
    appellation?: StringNullableWithAggregatesFilter<"Vin"> | string | null
    nom?: StringWithAggregatesFilter<"Vin"> | string
    quantite?: IntWithAggregatesFilter<"Vin"> | number
    is_consumed?: BoolWithAggregatesFilter<"Vin"> | boolean
    favoris?: BoolWithAggregatesFilter<"Vin"> | boolean
  }

  export type CaveWhereInput = {
    AND?: CaveWhereInput | CaveWhereInput[]
    OR?: CaveWhereInput[]
    NOT?: CaveWhereInput | CaveWhereInput[]
    id?: StringFilter<"Cave"> | string
    nom?: StringFilter<"Cave"> | string
    utilisateurId?: StringFilter<"Cave"> | string
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    vins?: VinListRelationFilter
    avis?: AvisListRelationFilter
    CaveVin?: CaveVinListRelationFilter
  }

  export type CaveOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    utilisateurId?: SortOrder
    utilisateur?: UtilisateurOrderByWithRelationInput
    vins?: VinOrderByRelationAggregateInput
    avis?: AvisOrderByRelationAggregateInput
    CaveVin?: CaveVinOrderByRelationAggregateInput
  }

  export type CaveWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CaveWhereInput | CaveWhereInput[]
    OR?: CaveWhereInput[]
    NOT?: CaveWhereInput | CaveWhereInput[]
    nom?: StringFilter<"Cave"> | string
    utilisateurId?: StringFilter<"Cave"> | string
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    vins?: VinListRelationFilter
    avis?: AvisListRelationFilter
    CaveVin?: CaveVinListRelationFilter
  }, "id">

  export type CaveOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    utilisateurId?: SortOrder
    _count?: CaveCountOrderByAggregateInput
    _max?: CaveMaxOrderByAggregateInput
    _min?: CaveMinOrderByAggregateInput
  }

  export type CaveScalarWhereWithAggregatesInput = {
    AND?: CaveScalarWhereWithAggregatesInput | CaveScalarWhereWithAggregatesInput[]
    OR?: CaveScalarWhereWithAggregatesInput[]
    NOT?: CaveScalarWhereWithAggregatesInput | CaveScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cave"> | string
    nom?: StringWithAggregatesFilter<"Cave"> | string
    utilisateurId?: StringWithAggregatesFilter<"Cave"> | string
  }

  export type AvisWhereInput = {
    AND?: AvisWhereInput | AvisWhereInput[]
    OR?: AvisWhereInput[]
    NOT?: AvisWhereInput | AvisWhereInput[]
    id?: StringFilter<"Avis"> | string
    note?: IntFilter<"Avis"> | number
    commentaire?: StringNullableFilter<"Avis"> | string | null
    vinId?: StringFilter<"Avis"> | string
    caveId?: StringNullableFilter<"Avis"> | string | null
    vin?: XOR<VinScalarRelationFilter, VinWhereInput>
    cave?: XOR<CaveNullableScalarRelationFilter, CaveWhereInput> | null
  }

  export type AvisOrderByWithRelationInput = {
    id?: SortOrder
    note?: SortOrder
    commentaire?: SortOrderInput | SortOrder
    vinId?: SortOrder
    caveId?: SortOrderInput | SortOrder
    vin?: VinOrderByWithRelationInput
    cave?: CaveOrderByWithRelationInput
  }

  export type AvisWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvisWhereInput | AvisWhereInput[]
    OR?: AvisWhereInput[]
    NOT?: AvisWhereInput | AvisWhereInput[]
    note?: IntFilter<"Avis"> | number
    commentaire?: StringNullableFilter<"Avis"> | string | null
    vinId?: StringFilter<"Avis"> | string
    caveId?: StringNullableFilter<"Avis"> | string | null
    vin?: XOR<VinScalarRelationFilter, VinWhereInput>
    cave?: XOR<CaveNullableScalarRelationFilter, CaveWhereInput> | null
  }, "id">

  export type AvisOrderByWithAggregationInput = {
    id?: SortOrder
    note?: SortOrder
    commentaire?: SortOrderInput | SortOrder
    vinId?: SortOrder
    caveId?: SortOrderInput | SortOrder
    _count?: AvisCountOrderByAggregateInput
    _avg?: AvisAvgOrderByAggregateInput
    _max?: AvisMaxOrderByAggregateInput
    _min?: AvisMinOrderByAggregateInput
    _sum?: AvisSumOrderByAggregateInput
  }

  export type AvisScalarWhereWithAggregatesInput = {
    AND?: AvisScalarWhereWithAggregatesInput | AvisScalarWhereWithAggregatesInput[]
    OR?: AvisScalarWhereWithAggregatesInput[]
    NOT?: AvisScalarWhereWithAggregatesInput | AvisScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Avis"> | string
    note?: IntWithAggregatesFilter<"Avis"> | number
    commentaire?: StringNullableWithAggregatesFilter<"Avis"> | string | null
    vinId?: StringWithAggregatesFilter<"Avis"> | string
    caveId?: StringNullableWithAggregatesFilter<"Avis"> | string | null
  }

  export type CaveVinWhereInput = {
    AND?: CaveVinWhereInput | CaveVinWhereInput[]
    OR?: CaveVinWhereInput[]
    NOT?: CaveVinWhereInput | CaveVinWhereInput[]
    caveId?: StringFilter<"CaveVin"> | string
    vinId?: StringFilter<"CaveVin"> | string
    cave?: XOR<CaveScalarRelationFilter, CaveWhereInput>
    vin?: XOR<VinScalarRelationFilter, VinWhereInput>
  }

  export type CaveVinOrderByWithRelationInput = {
    caveId?: SortOrder
    vinId?: SortOrder
    cave?: CaveOrderByWithRelationInput
    vin?: VinOrderByWithRelationInput
  }

  export type CaveVinWhereUniqueInput = Prisma.AtLeast<{
    caveId_vinId?: CaveVinCaveIdVinIdCompoundUniqueInput
    AND?: CaveVinWhereInput | CaveVinWhereInput[]
    OR?: CaveVinWhereInput[]
    NOT?: CaveVinWhereInput | CaveVinWhereInput[]
    caveId?: StringFilter<"CaveVin"> | string
    vinId?: StringFilter<"CaveVin"> | string
    cave?: XOR<CaveScalarRelationFilter, CaveWhereInput>
    vin?: XOR<VinScalarRelationFilter, VinWhereInput>
  }, "caveId_vinId">

  export type CaveVinOrderByWithAggregationInput = {
    caveId?: SortOrder
    vinId?: SortOrder
    _count?: CaveVinCountOrderByAggregateInput
    _max?: CaveVinMaxOrderByAggregateInput
    _min?: CaveVinMinOrderByAggregateInput
  }

  export type CaveVinScalarWhereWithAggregatesInput = {
    AND?: CaveVinScalarWhereWithAggregatesInput | CaveVinScalarWhereWithAggregatesInput[]
    OR?: CaveVinScalarWhereWithAggregatesInput[]
    NOT?: CaveVinScalarWhereWithAggregatesInput | CaveVinScalarWhereWithAggregatesInput[]
    caveId?: StringWithAggregatesFilter<"CaveVin"> | string
    vinId?: StringWithAggregatesFilter<"CaveVin"> | string
  }

  export type UtilisateurCreateInput = {
    id?: string
    pseudonyme: string
    email: string
    password: string
    caves?: CaveCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateInput = {
    id?: string
    pseudonyme: string
    email: string
    password: string
    caves?: CaveUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pseudonyme?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    caves?: CaveUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pseudonyme?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    caves?: CaveUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurCreateManyInput = {
    id?: string
    pseudonyme: string
    email: string
    password: string
  }

  export type UtilisateurUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pseudonyme?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UtilisateurUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pseudonyme?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type VinCreateInput = {
    id?: string
    couleur: string
    annee: number
    appellation?: string | null
    nom: string
    quantite: number
    is_consumed: boolean
    favoris: boolean
    avis?: AvisCreateNestedManyWithoutVinInput
    caves?: CaveCreateNestedManyWithoutVinsInput
    caveVins?: CaveVinCreateNestedManyWithoutVinInput
  }

  export type VinUncheckedCreateInput = {
    id?: string
    couleur: string
    annee: number
    appellation?: string | null
    nom: string
    quantite: number
    is_consumed: boolean
    favoris: boolean
    avis?: AvisUncheckedCreateNestedManyWithoutVinInput
    caves?: CaveUncheckedCreateNestedManyWithoutVinsInput
    caveVins?: CaveVinUncheckedCreateNestedManyWithoutVinInput
  }

  export type VinUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    couleur?: StringFieldUpdateOperationsInput | string
    annee?: IntFieldUpdateOperationsInput | number
    appellation?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    is_consumed?: BoolFieldUpdateOperationsInput | boolean
    favoris?: BoolFieldUpdateOperationsInput | boolean
    avis?: AvisUpdateManyWithoutVinNestedInput
    caves?: CaveUpdateManyWithoutVinsNestedInput
    caveVins?: CaveVinUpdateManyWithoutVinNestedInput
  }

  export type VinUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    couleur?: StringFieldUpdateOperationsInput | string
    annee?: IntFieldUpdateOperationsInput | number
    appellation?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    is_consumed?: BoolFieldUpdateOperationsInput | boolean
    favoris?: BoolFieldUpdateOperationsInput | boolean
    avis?: AvisUncheckedUpdateManyWithoutVinNestedInput
    caves?: CaveUncheckedUpdateManyWithoutVinsNestedInput
    caveVins?: CaveVinUncheckedUpdateManyWithoutVinNestedInput
  }

  export type VinCreateManyInput = {
    id?: string
    couleur: string
    annee: number
    appellation?: string | null
    nom: string
    quantite: number
    is_consumed: boolean
    favoris: boolean
  }

  export type VinUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    couleur?: StringFieldUpdateOperationsInput | string
    annee?: IntFieldUpdateOperationsInput | number
    appellation?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    is_consumed?: BoolFieldUpdateOperationsInput | boolean
    favoris?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VinUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    couleur?: StringFieldUpdateOperationsInput | string
    annee?: IntFieldUpdateOperationsInput | number
    appellation?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    is_consumed?: BoolFieldUpdateOperationsInput | boolean
    favoris?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CaveCreateInput = {
    id?: string
    nom: string
    utilisateur: UtilisateurCreateNestedOneWithoutCavesInput
    vins?: VinCreateNestedManyWithoutCavesInput
    avis?: AvisCreateNestedManyWithoutCaveInput
    CaveVin?: CaveVinCreateNestedManyWithoutCaveInput
  }

  export type CaveUncheckedCreateInput = {
    id?: string
    nom: string
    utilisateurId: string
    vins?: VinUncheckedCreateNestedManyWithoutCavesInput
    avis?: AvisUncheckedCreateNestedManyWithoutCaveInput
    CaveVin?: CaveVinUncheckedCreateNestedManyWithoutCaveInput
  }

  export type CaveUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutCavesNestedInput
    vins?: VinUpdateManyWithoutCavesNestedInput
    avis?: AvisUpdateManyWithoutCaveNestedInput
    CaveVin?: CaveVinUpdateManyWithoutCaveNestedInput
  }

  export type CaveUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    utilisateurId?: StringFieldUpdateOperationsInput | string
    vins?: VinUncheckedUpdateManyWithoutCavesNestedInput
    avis?: AvisUncheckedUpdateManyWithoutCaveNestedInput
    CaveVin?: CaveVinUncheckedUpdateManyWithoutCaveNestedInput
  }

  export type CaveCreateManyInput = {
    id?: string
    nom: string
    utilisateurId: string
  }

  export type CaveUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
  }

  export type CaveUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    utilisateurId?: StringFieldUpdateOperationsInput | string
  }

  export type AvisCreateInput = {
    id?: string
    note: number
    commentaire?: string | null
    vin: VinCreateNestedOneWithoutAvisInput
    cave?: CaveCreateNestedOneWithoutAvisInput
  }

  export type AvisUncheckedCreateInput = {
    id?: string
    note: number
    commentaire?: string | null
    vinId: string
    caveId?: string | null
  }

  export type AvisUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: IntFieldUpdateOperationsInput | number
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    vin?: VinUpdateOneRequiredWithoutAvisNestedInput
    cave?: CaveUpdateOneWithoutAvisNestedInput
  }

  export type AvisUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: IntFieldUpdateOperationsInput | number
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    vinId?: StringFieldUpdateOperationsInput | string
    caveId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AvisCreateManyInput = {
    id?: string
    note: number
    commentaire?: string | null
    vinId: string
    caveId?: string | null
  }

  export type AvisUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: IntFieldUpdateOperationsInput | number
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AvisUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: IntFieldUpdateOperationsInput | number
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    vinId?: StringFieldUpdateOperationsInput | string
    caveId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CaveVinCreateInput = {
    cave: CaveCreateNestedOneWithoutCaveVinInput
    vin: VinCreateNestedOneWithoutCaveVinsInput
  }

  export type CaveVinUncheckedCreateInput = {
    caveId: string
    vinId: string
  }

  export type CaveVinUpdateInput = {
    cave?: CaveUpdateOneRequiredWithoutCaveVinNestedInput
    vin?: VinUpdateOneRequiredWithoutCaveVinsNestedInput
  }

  export type CaveVinUncheckedUpdateInput = {
    caveId?: StringFieldUpdateOperationsInput | string
    vinId?: StringFieldUpdateOperationsInput | string
  }

  export type CaveVinCreateManyInput = {
    caveId: string
    vinId: string
  }

  export type CaveVinUpdateManyMutationInput = {

  }

  export type CaveVinUncheckedUpdateManyInput = {
    caveId?: StringFieldUpdateOperationsInput | string
    vinId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type CaveListRelationFilter = {
    every?: CaveWhereInput
    some?: CaveWhereInput
    none?: CaveWhereInput
  }

  export type CaveOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UtilisateurCountOrderByAggregateInput = {
    id?: SortOrder
    pseudonyme?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UtilisateurMaxOrderByAggregateInput = {
    id?: SortOrder
    pseudonyme?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UtilisateurMinOrderByAggregateInput = {
    id?: SortOrder
    pseudonyme?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AvisListRelationFilter = {
    every?: AvisWhereInput
    some?: AvisWhereInput
    none?: AvisWhereInput
  }

  export type CaveVinListRelationFilter = {
    every?: CaveVinWhereInput
    some?: CaveVinWhereInput
    none?: CaveVinWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AvisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CaveVinOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VinCountOrderByAggregateInput = {
    id?: SortOrder
    couleur?: SortOrder
    annee?: SortOrder
    appellation?: SortOrder
    nom?: SortOrder
    quantite?: SortOrder
    is_consumed?: SortOrder
    favoris?: SortOrder
  }

  export type VinAvgOrderByAggregateInput = {
    annee?: SortOrder
    quantite?: SortOrder
  }

  export type VinMaxOrderByAggregateInput = {
    id?: SortOrder
    couleur?: SortOrder
    annee?: SortOrder
    appellation?: SortOrder
    nom?: SortOrder
    quantite?: SortOrder
    is_consumed?: SortOrder
    favoris?: SortOrder
  }

  export type VinMinOrderByAggregateInput = {
    id?: SortOrder
    couleur?: SortOrder
    annee?: SortOrder
    appellation?: SortOrder
    nom?: SortOrder
    quantite?: SortOrder
    is_consumed?: SortOrder
    favoris?: SortOrder
  }

  export type VinSumOrderByAggregateInput = {
    annee?: SortOrder
    quantite?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UtilisateurScalarRelationFilter = {
    is?: UtilisateurWhereInput
    isNot?: UtilisateurWhereInput
  }

  export type VinListRelationFilter = {
    every?: VinWhereInput
    some?: VinWhereInput
    none?: VinWhereInput
  }

  export type VinOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CaveCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    utilisateurId?: SortOrder
  }

  export type CaveMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    utilisateurId?: SortOrder
  }

  export type CaveMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    utilisateurId?: SortOrder
  }

  export type VinScalarRelationFilter = {
    is?: VinWhereInput
    isNot?: VinWhereInput
  }

  export type CaveNullableScalarRelationFilter = {
    is?: CaveWhereInput | null
    isNot?: CaveWhereInput | null
  }

  export type AvisCountOrderByAggregateInput = {
    id?: SortOrder
    note?: SortOrder
    commentaire?: SortOrder
    vinId?: SortOrder
    caveId?: SortOrder
  }

  export type AvisAvgOrderByAggregateInput = {
    note?: SortOrder
  }

  export type AvisMaxOrderByAggregateInput = {
    id?: SortOrder
    note?: SortOrder
    commentaire?: SortOrder
    vinId?: SortOrder
    caveId?: SortOrder
  }

  export type AvisMinOrderByAggregateInput = {
    id?: SortOrder
    note?: SortOrder
    commentaire?: SortOrder
    vinId?: SortOrder
    caveId?: SortOrder
  }

  export type AvisSumOrderByAggregateInput = {
    note?: SortOrder
  }

  export type CaveScalarRelationFilter = {
    is?: CaveWhereInput
    isNot?: CaveWhereInput
  }

  export type CaveVinCaveIdVinIdCompoundUniqueInput = {
    caveId: string
    vinId: string
  }

  export type CaveVinCountOrderByAggregateInput = {
    caveId?: SortOrder
    vinId?: SortOrder
  }

  export type CaveVinMaxOrderByAggregateInput = {
    caveId?: SortOrder
    vinId?: SortOrder
  }

  export type CaveVinMinOrderByAggregateInput = {
    caveId?: SortOrder
    vinId?: SortOrder
  }

  export type CaveCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<CaveCreateWithoutUtilisateurInput, CaveUncheckedCreateWithoutUtilisateurInput> | CaveCreateWithoutUtilisateurInput[] | CaveUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: CaveCreateOrConnectWithoutUtilisateurInput | CaveCreateOrConnectWithoutUtilisateurInput[]
    createMany?: CaveCreateManyUtilisateurInputEnvelope
    connect?: CaveWhereUniqueInput | CaveWhereUniqueInput[]
  }

  export type CaveUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<CaveCreateWithoutUtilisateurInput, CaveUncheckedCreateWithoutUtilisateurInput> | CaveCreateWithoutUtilisateurInput[] | CaveUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: CaveCreateOrConnectWithoutUtilisateurInput | CaveCreateOrConnectWithoutUtilisateurInput[]
    createMany?: CaveCreateManyUtilisateurInputEnvelope
    connect?: CaveWhereUniqueInput | CaveWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CaveUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<CaveCreateWithoutUtilisateurInput, CaveUncheckedCreateWithoutUtilisateurInput> | CaveCreateWithoutUtilisateurInput[] | CaveUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: CaveCreateOrConnectWithoutUtilisateurInput | CaveCreateOrConnectWithoutUtilisateurInput[]
    upsert?: CaveUpsertWithWhereUniqueWithoutUtilisateurInput | CaveUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: CaveCreateManyUtilisateurInputEnvelope
    set?: CaveWhereUniqueInput | CaveWhereUniqueInput[]
    disconnect?: CaveWhereUniqueInput | CaveWhereUniqueInput[]
    delete?: CaveWhereUniqueInput | CaveWhereUniqueInput[]
    connect?: CaveWhereUniqueInput | CaveWhereUniqueInput[]
    update?: CaveUpdateWithWhereUniqueWithoutUtilisateurInput | CaveUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: CaveUpdateManyWithWhereWithoutUtilisateurInput | CaveUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: CaveScalarWhereInput | CaveScalarWhereInput[]
  }

  export type CaveUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<CaveCreateWithoutUtilisateurInput, CaveUncheckedCreateWithoutUtilisateurInput> | CaveCreateWithoutUtilisateurInput[] | CaveUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: CaveCreateOrConnectWithoutUtilisateurInput | CaveCreateOrConnectWithoutUtilisateurInput[]
    upsert?: CaveUpsertWithWhereUniqueWithoutUtilisateurInput | CaveUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: CaveCreateManyUtilisateurInputEnvelope
    set?: CaveWhereUniqueInput | CaveWhereUniqueInput[]
    disconnect?: CaveWhereUniqueInput | CaveWhereUniqueInput[]
    delete?: CaveWhereUniqueInput | CaveWhereUniqueInput[]
    connect?: CaveWhereUniqueInput | CaveWhereUniqueInput[]
    update?: CaveUpdateWithWhereUniqueWithoutUtilisateurInput | CaveUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: CaveUpdateManyWithWhereWithoutUtilisateurInput | CaveUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: CaveScalarWhereInput | CaveScalarWhereInput[]
  }

  export type AvisCreateNestedManyWithoutVinInput = {
    create?: XOR<AvisCreateWithoutVinInput, AvisUncheckedCreateWithoutVinInput> | AvisCreateWithoutVinInput[] | AvisUncheckedCreateWithoutVinInput[]
    connectOrCreate?: AvisCreateOrConnectWithoutVinInput | AvisCreateOrConnectWithoutVinInput[]
    createMany?: AvisCreateManyVinInputEnvelope
    connect?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
  }

  export type CaveCreateNestedManyWithoutVinsInput = {
    create?: XOR<CaveCreateWithoutVinsInput, CaveUncheckedCreateWithoutVinsInput> | CaveCreateWithoutVinsInput[] | CaveUncheckedCreateWithoutVinsInput[]
    connectOrCreate?: CaveCreateOrConnectWithoutVinsInput | CaveCreateOrConnectWithoutVinsInput[]
    connect?: CaveWhereUniqueInput | CaveWhereUniqueInput[]
  }

  export type CaveVinCreateNestedManyWithoutVinInput = {
    create?: XOR<CaveVinCreateWithoutVinInput, CaveVinUncheckedCreateWithoutVinInput> | CaveVinCreateWithoutVinInput[] | CaveVinUncheckedCreateWithoutVinInput[]
    connectOrCreate?: CaveVinCreateOrConnectWithoutVinInput | CaveVinCreateOrConnectWithoutVinInput[]
    createMany?: CaveVinCreateManyVinInputEnvelope
    connect?: CaveVinWhereUniqueInput | CaveVinWhereUniqueInput[]
  }

  export type AvisUncheckedCreateNestedManyWithoutVinInput = {
    create?: XOR<AvisCreateWithoutVinInput, AvisUncheckedCreateWithoutVinInput> | AvisCreateWithoutVinInput[] | AvisUncheckedCreateWithoutVinInput[]
    connectOrCreate?: AvisCreateOrConnectWithoutVinInput | AvisCreateOrConnectWithoutVinInput[]
    createMany?: AvisCreateManyVinInputEnvelope
    connect?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
  }

  export type CaveUncheckedCreateNestedManyWithoutVinsInput = {
    create?: XOR<CaveCreateWithoutVinsInput, CaveUncheckedCreateWithoutVinsInput> | CaveCreateWithoutVinsInput[] | CaveUncheckedCreateWithoutVinsInput[]
    connectOrCreate?: CaveCreateOrConnectWithoutVinsInput | CaveCreateOrConnectWithoutVinsInput[]
    connect?: CaveWhereUniqueInput | CaveWhereUniqueInput[]
  }

  export type CaveVinUncheckedCreateNestedManyWithoutVinInput = {
    create?: XOR<CaveVinCreateWithoutVinInput, CaveVinUncheckedCreateWithoutVinInput> | CaveVinCreateWithoutVinInput[] | CaveVinUncheckedCreateWithoutVinInput[]
    connectOrCreate?: CaveVinCreateOrConnectWithoutVinInput | CaveVinCreateOrConnectWithoutVinInput[]
    createMany?: CaveVinCreateManyVinInputEnvelope
    connect?: CaveVinWhereUniqueInput | CaveVinWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AvisUpdateManyWithoutVinNestedInput = {
    create?: XOR<AvisCreateWithoutVinInput, AvisUncheckedCreateWithoutVinInput> | AvisCreateWithoutVinInput[] | AvisUncheckedCreateWithoutVinInput[]
    connectOrCreate?: AvisCreateOrConnectWithoutVinInput | AvisCreateOrConnectWithoutVinInput[]
    upsert?: AvisUpsertWithWhereUniqueWithoutVinInput | AvisUpsertWithWhereUniqueWithoutVinInput[]
    createMany?: AvisCreateManyVinInputEnvelope
    set?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    disconnect?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    delete?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    connect?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    update?: AvisUpdateWithWhereUniqueWithoutVinInput | AvisUpdateWithWhereUniqueWithoutVinInput[]
    updateMany?: AvisUpdateManyWithWhereWithoutVinInput | AvisUpdateManyWithWhereWithoutVinInput[]
    deleteMany?: AvisScalarWhereInput | AvisScalarWhereInput[]
  }

  export type CaveUpdateManyWithoutVinsNestedInput = {
    create?: XOR<CaveCreateWithoutVinsInput, CaveUncheckedCreateWithoutVinsInput> | CaveCreateWithoutVinsInput[] | CaveUncheckedCreateWithoutVinsInput[]
    connectOrCreate?: CaveCreateOrConnectWithoutVinsInput | CaveCreateOrConnectWithoutVinsInput[]
    upsert?: CaveUpsertWithWhereUniqueWithoutVinsInput | CaveUpsertWithWhereUniqueWithoutVinsInput[]
    set?: CaveWhereUniqueInput | CaveWhereUniqueInput[]
    disconnect?: CaveWhereUniqueInput | CaveWhereUniqueInput[]
    delete?: CaveWhereUniqueInput | CaveWhereUniqueInput[]
    connect?: CaveWhereUniqueInput | CaveWhereUniqueInput[]
    update?: CaveUpdateWithWhereUniqueWithoutVinsInput | CaveUpdateWithWhereUniqueWithoutVinsInput[]
    updateMany?: CaveUpdateManyWithWhereWithoutVinsInput | CaveUpdateManyWithWhereWithoutVinsInput[]
    deleteMany?: CaveScalarWhereInput | CaveScalarWhereInput[]
  }

  export type CaveVinUpdateManyWithoutVinNestedInput = {
    create?: XOR<CaveVinCreateWithoutVinInput, CaveVinUncheckedCreateWithoutVinInput> | CaveVinCreateWithoutVinInput[] | CaveVinUncheckedCreateWithoutVinInput[]
    connectOrCreate?: CaveVinCreateOrConnectWithoutVinInput | CaveVinCreateOrConnectWithoutVinInput[]
    upsert?: CaveVinUpsertWithWhereUniqueWithoutVinInput | CaveVinUpsertWithWhereUniqueWithoutVinInput[]
    createMany?: CaveVinCreateManyVinInputEnvelope
    set?: CaveVinWhereUniqueInput | CaveVinWhereUniqueInput[]
    disconnect?: CaveVinWhereUniqueInput | CaveVinWhereUniqueInput[]
    delete?: CaveVinWhereUniqueInput | CaveVinWhereUniqueInput[]
    connect?: CaveVinWhereUniqueInput | CaveVinWhereUniqueInput[]
    update?: CaveVinUpdateWithWhereUniqueWithoutVinInput | CaveVinUpdateWithWhereUniqueWithoutVinInput[]
    updateMany?: CaveVinUpdateManyWithWhereWithoutVinInput | CaveVinUpdateManyWithWhereWithoutVinInput[]
    deleteMany?: CaveVinScalarWhereInput | CaveVinScalarWhereInput[]
  }

  export type AvisUncheckedUpdateManyWithoutVinNestedInput = {
    create?: XOR<AvisCreateWithoutVinInput, AvisUncheckedCreateWithoutVinInput> | AvisCreateWithoutVinInput[] | AvisUncheckedCreateWithoutVinInput[]
    connectOrCreate?: AvisCreateOrConnectWithoutVinInput | AvisCreateOrConnectWithoutVinInput[]
    upsert?: AvisUpsertWithWhereUniqueWithoutVinInput | AvisUpsertWithWhereUniqueWithoutVinInput[]
    createMany?: AvisCreateManyVinInputEnvelope
    set?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    disconnect?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    delete?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    connect?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    update?: AvisUpdateWithWhereUniqueWithoutVinInput | AvisUpdateWithWhereUniqueWithoutVinInput[]
    updateMany?: AvisUpdateManyWithWhereWithoutVinInput | AvisUpdateManyWithWhereWithoutVinInput[]
    deleteMany?: AvisScalarWhereInput | AvisScalarWhereInput[]
  }

  export type CaveUncheckedUpdateManyWithoutVinsNestedInput = {
    create?: XOR<CaveCreateWithoutVinsInput, CaveUncheckedCreateWithoutVinsInput> | CaveCreateWithoutVinsInput[] | CaveUncheckedCreateWithoutVinsInput[]
    connectOrCreate?: CaveCreateOrConnectWithoutVinsInput | CaveCreateOrConnectWithoutVinsInput[]
    upsert?: CaveUpsertWithWhereUniqueWithoutVinsInput | CaveUpsertWithWhereUniqueWithoutVinsInput[]
    set?: CaveWhereUniqueInput | CaveWhereUniqueInput[]
    disconnect?: CaveWhereUniqueInput | CaveWhereUniqueInput[]
    delete?: CaveWhereUniqueInput | CaveWhereUniqueInput[]
    connect?: CaveWhereUniqueInput | CaveWhereUniqueInput[]
    update?: CaveUpdateWithWhereUniqueWithoutVinsInput | CaveUpdateWithWhereUniqueWithoutVinsInput[]
    updateMany?: CaveUpdateManyWithWhereWithoutVinsInput | CaveUpdateManyWithWhereWithoutVinsInput[]
    deleteMany?: CaveScalarWhereInput | CaveScalarWhereInput[]
  }

  export type CaveVinUncheckedUpdateManyWithoutVinNestedInput = {
    create?: XOR<CaveVinCreateWithoutVinInput, CaveVinUncheckedCreateWithoutVinInput> | CaveVinCreateWithoutVinInput[] | CaveVinUncheckedCreateWithoutVinInput[]
    connectOrCreate?: CaveVinCreateOrConnectWithoutVinInput | CaveVinCreateOrConnectWithoutVinInput[]
    upsert?: CaveVinUpsertWithWhereUniqueWithoutVinInput | CaveVinUpsertWithWhereUniqueWithoutVinInput[]
    createMany?: CaveVinCreateManyVinInputEnvelope
    set?: CaveVinWhereUniqueInput | CaveVinWhereUniqueInput[]
    disconnect?: CaveVinWhereUniqueInput | CaveVinWhereUniqueInput[]
    delete?: CaveVinWhereUniqueInput | CaveVinWhereUniqueInput[]
    connect?: CaveVinWhereUniqueInput | CaveVinWhereUniqueInput[]
    update?: CaveVinUpdateWithWhereUniqueWithoutVinInput | CaveVinUpdateWithWhereUniqueWithoutVinInput[]
    updateMany?: CaveVinUpdateManyWithWhereWithoutVinInput | CaveVinUpdateManyWithWhereWithoutVinInput[]
    deleteMany?: CaveVinScalarWhereInput | CaveVinScalarWhereInput[]
  }

  export type UtilisateurCreateNestedOneWithoutCavesInput = {
    create?: XOR<UtilisateurCreateWithoutCavesInput, UtilisateurUncheckedCreateWithoutCavesInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutCavesInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type VinCreateNestedManyWithoutCavesInput = {
    create?: XOR<VinCreateWithoutCavesInput, VinUncheckedCreateWithoutCavesInput> | VinCreateWithoutCavesInput[] | VinUncheckedCreateWithoutCavesInput[]
    connectOrCreate?: VinCreateOrConnectWithoutCavesInput | VinCreateOrConnectWithoutCavesInput[]
    connect?: VinWhereUniqueInput | VinWhereUniqueInput[]
  }

  export type AvisCreateNestedManyWithoutCaveInput = {
    create?: XOR<AvisCreateWithoutCaveInput, AvisUncheckedCreateWithoutCaveInput> | AvisCreateWithoutCaveInput[] | AvisUncheckedCreateWithoutCaveInput[]
    connectOrCreate?: AvisCreateOrConnectWithoutCaveInput | AvisCreateOrConnectWithoutCaveInput[]
    createMany?: AvisCreateManyCaveInputEnvelope
    connect?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
  }

  export type CaveVinCreateNestedManyWithoutCaveInput = {
    create?: XOR<CaveVinCreateWithoutCaveInput, CaveVinUncheckedCreateWithoutCaveInput> | CaveVinCreateWithoutCaveInput[] | CaveVinUncheckedCreateWithoutCaveInput[]
    connectOrCreate?: CaveVinCreateOrConnectWithoutCaveInput | CaveVinCreateOrConnectWithoutCaveInput[]
    createMany?: CaveVinCreateManyCaveInputEnvelope
    connect?: CaveVinWhereUniqueInput | CaveVinWhereUniqueInput[]
  }

  export type VinUncheckedCreateNestedManyWithoutCavesInput = {
    create?: XOR<VinCreateWithoutCavesInput, VinUncheckedCreateWithoutCavesInput> | VinCreateWithoutCavesInput[] | VinUncheckedCreateWithoutCavesInput[]
    connectOrCreate?: VinCreateOrConnectWithoutCavesInput | VinCreateOrConnectWithoutCavesInput[]
    connect?: VinWhereUniqueInput | VinWhereUniqueInput[]
  }

  export type AvisUncheckedCreateNestedManyWithoutCaveInput = {
    create?: XOR<AvisCreateWithoutCaveInput, AvisUncheckedCreateWithoutCaveInput> | AvisCreateWithoutCaveInput[] | AvisUncheckedCreateWithoutCaveInput[]
    connectOrCreate?: AvisCreateOrConnectWithoutCaveInput | AvisCreateOrConnectWithoutCaveInput[]
    createMany?: AvisCreateManyCaveInputEnvelope
    connect?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
  }

  export type CaveVinUncheckedCreateNestedManyWithoutCaveInput = {
    create?: XOR<CaveVinCreateWithoutCaveInput, CaveVinUncheckedCreateWithoutCaveInput> | CaveVinCreateWithoutCaveInput[] | CaveVinUncheckedCreateWithoutCaveInput[]
    connectOrCreate?: CaveVinCreateOrConnectWithoutCaveInput | CaveVinCreateOrConnectWithoutCaveInput[]
    createMany?: CaveVinCreateManyCaveInputEnvelope
    connect?: CaveVinWhereUniqueInput | CaveVinWhereUniqueInput[]
  }

  export type UtilisateurUpdateOneRequiredWithoutCavesNestedInput = {
    create?: XOR<UtilisateurCreateWithoutCavesInput, UtilisateurUncheckedCreateWithoutCavesInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutCavesInput
    upsert?: UtilisateurUpsertWithoutCavesInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutCavesInput, UtilisateurUpdateWithoutCavesInput>, UtilisateurUncheckedUpdateWithoutCavesInput>
  }

  export type VinUpdateManyWithoutCavesNestedInput = {
    create?: XOR<VinCreateWithoutCavesInput, VinUncheckedCreateWithoutCavesInput> | VinCreateWithoutCavesInput[] | VinUncheckedCreateWithoutCavesInput[]
    connectOrCreate?: VinCreateOrConnectWithoutCavesInput | VinCreateOrConnectWithoutCavesInput[]
    upsert?: VinUpsertWithWhereUniqueWithoutCavesInput | VinUpsertWithWhereUniqueWithoutCavesInput[]
    set?: VinWhereUniqueInput | VinWhereUniqueInput[]
    disconnect?: VinWhereUniqueInput | VinWhereUniqueInput[]
    delete?: VinWhereUniqueInput | VinWhereUniqueInput[]
    connect?: VinWhereUniqueInput | VinWhereUniqueInput[]
    update?: VinUpdateWithWhereUniqueWithoutCavesInput | VinUpdateWithWhereUniqueWithoutCavesInput[]
    updateMany?: VinUpdateManyWithWhereWithoutCavesInput | VinUpdateManyWithWhereWithoutCavesInput[]
    deleteMany?: VinScalarWhereInput | VinScalarWhereInput[]
  }

  export type AvisUpdateManyWithoutCaveNestedInput = {
    create?: XOR<AvisCreateWithoutCaveInput, AvisUncheckedCreateWithoutCaveInput> | AvisCreateWithoutCaveInput[] | AvisUncheckedCreateWithoutCaveInput[]
    connectOrCreate?: AvisCreateOrConnectWithoutCaveInput | AvisCreateOrConnectWithoutCaveInput[]
    upsert?: AvisUpsertWithWhereUniqueWithoutCaveInput | AvisUpsertWithWhereUniqueWithoutCaveInput[]
    createMany?: AvisCreateManyCaveInputEnvelope
    set?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    disconnect?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    delete?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    connect?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    update?: AvisUpdateWithWhereUniqueWithoutCaveInput | AvisUpdateWithWhereUniqueWithoutCaveInput[]
    updateMany?: AvisUpdateManyWithWhereWithoutCaveInput | AvisUpdateManyWithWhereWithoutCaveInput[]
    deleteMany?: AvisScalarWhereInput | AvisScalarWhereInput[]
  }

  export type CaveVinUpdateManyWithoutCaveNestedInput = {
    create?: XOR<CaveVinCreateWithoutCaveInput, CaveVinUncheckedCreateWithoutCaveInput> | CaveVinCreateWithoutCaveInput[] | CaveVinUncheckedCreateWithoutCaveInput[]
    connectOrCreate?: CaveVinCreateOrConnectWithoutCaveInput | CaveVinCreateOrConnectWithoutCaveInput[]
    upsert?: CaveVinUpsertWithWhereUniqueWithoutCaveInput | CaveVinUpsertWithWhereUniqueWithoutCaveInput[]
    createMany?: CaveVinCreateManyCaveInputEnvelope
    set?: CaveVinWhereUniqueInput | CaveVinWhereUniqueInput[]
    disconnect?: CaveVinWhereUniqueInput | CaveVinWhereUniqueInput[]
    delete?: CaveVinWhereUniqueInput | CaveVinWhereUniqueInput[]
    connect?: CaveVinWhereUniqueInput | CaveVinWhereUniqueInput[]
    update?: CaveVinUpdateWithWhereUniqueWithoutCaveInput | CaveVinUpdateWithWhereUniqueWithoutCaveInput[]
    updateMany?: CaveVinUpdateManyWithWhereWithoutCaveInput | CaveVinUpdateManyWithWhereWithoutCaveInput[]
    deleteMany?: CaveVinScalarWhereInput | CaveVinScalarWhereInput[]
  }

  export type VinUncheckedUpdateManyWithoutCavesNestedInput = {
    create?: XOR<VinCreateWithoutCavesInput, VinUncheckedCreateWithoutCavesInput> | VinCreateWithoutCavesInput[] | VinUncheckedCreateWithoutCavesInput[]
    connectOrCreate?: VinCreateOrConnectWithoutCavesInput | VinCreateOrConnectWithoutCavesInput[]
    upsert?: VinUpsertWithWhereUniqueWithoutCavesInput | VinUpsertWithWhereUniqueWithoutCavesInput[]
    set?: VinWhereUniqueInput | VinWhereUniqueInput[]
    disconnect?: VinWhereUniqueInput | VinWhereUniqueInput[]
    delete?: VinWhereUniqueInput | VinWhereUniqueInput[]
    connect?: VinWhereUniqueInput | VinWhereUniqueInput[]
    update?: VinUpdateWithWhereUniqueWithoutCavesInput | VinUpdateWithWhereUniqueWithoutCavesInput[]
    updateMany?: VinUpdateManyWithWhereWithoutCavesInput | VinUpdateManyWithWhereWithoutCavesInput[]
    deleteMany?: VinScalarWhereInput | VinScalarWhereInput[]
  }

  export type AvisUncheckedUpdateManyWithoutCaveNestedInput = {
    create?: XOR<AvisCreateWithoutCaveInput, AvisUncheckedCreateWithoutCaveInput> | AvisCreateWithoutCaveInput[] | AvisUncheckedCreateWithoutCaveInput[]
    connectOrCreate?: AvisCreateOrConnectWithoutCaveInput | AvisCreateOrConnectWithoutCaveInput[]
    upsert?: AvisUpsertWithWhereUniqueWithoutCaveInput | AvisUpsertWithWhereUniqueWithoutCaveInput[]
    createMany?: AvisCreateManyCaveInputEnvelope
    set?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    disconnect?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    delete?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    connect?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    update?: AvisUpdateWithWhereUniqueWithoutCaveInput | AvisUpdateWithWhereUniqueWithoutCaveInput[]
    updateMany?: AvisUpdateManyWithWhereWithoutCaveInput | AvisUpdateManyWithWhereWithoutCaveInput[]
    deleteMany?: AvisScalarWhereInput | AvisScalarWhereInput[]
  }

  export type CaveVinUncheckedUpdateManyWithoutCaveNestedInput = {
    create?: XOR<CaveVinCreateWithoutCaveInput, CaveVinUncheckedCreateWithoutCaveInput> | CaveVinCreateWithoutCaveInput[] | CaveVinUncheckedCreateWithoutCaveInput[]
    connectOrCreate?: CaveVinCreateOrConnectWithoutCaveInput | CaveVinCreateOrConnectWithoutCaveInput[]
    upsert?: CaveVinUpsertWithWhereUniqueWithoutCaveInput | CaveVinUpsertWithWhereUniqueWithoutCaveInput[]
    createMany?: CaveVinCreateManyCaveInputEnvelope
    set?: CaveVinWhereUniqueInput | CaveVinWhereUniqueInput[]
    disconnect?: CaveVinWhereUniqueInput | CaveVinWhereUniqueInput[]
    delete?: CaveVinWhereUniqueInput | CaveVinWhereUniqueInput[]
    connect?: CaveVinWhereUniqueInput | CaveVinWhereUniqueInput[]
    update?: CaveVinUpdateWithWhereUniqueWithoutCaveInput | CaveVinUpdateWithWhereUniqueWithoutCaveInput[]
    updateMany?: CaveVinUpdateManyWithWhereWithoutCaveInput | CaveVinUpdateManyWithWhereWithoutCaveInput[]
    deleteMany?: CaveVinScalarWhereInput | CaveVinScalarWhereInput[]
  }

  export type VinCreateNestedOneWithoutAvisInput = {
    create?: XOR<VinCreateWithoutAvisInput, VinUncheckedCreateWithoutAvisInput>
    connectOrCreate?: VinCreateOrConnectWithoutAvisInput
    connect?: VinWhereUniqueInput
  }

  export type CaveCreateNestedOneWithoutAvisInput = {
    create?: XOR<CaveCreateWithoutAvisInput, CaveUncheckedCreateWithoutAvisInput>
    connectOrCreate?: CaveCreateOrConnectWithoutAvisInput
    connect?: CaveWhereUniqueInput
  }

  export type VinUpdateOneRequiredWithoutAvisNestedInput = {
    create?: XOR<VinCreateWithoutAvisInput, VinUncheckedCreateWithoutAvisInput>
    connectOrCreate?: VinCreateOrConnectWithoutAvisInput
    upsert?: VinUpsertWithoutAvisInput
    connect?: VinWhereUniqueInput
    update?: XOR<XOR<VinUpdateToOneWithWhereWithoutAvisInput, VinUpdateWithoutAvisInput>, VinUncheckedUpdateWithoutAvisInput>
  }

  export type CaveUpdateOneWithoutAvisNestedInput = {
    create?: XOR<CaveCreateWithoutAvisInput, CaveUncheckedCreateWithoutAvisInput>
    connectOrCreate?: CaveCreateOrConnectWithoutAvisInput
    upsert?: CaveUpsertWithoutAvisInput
    disconnect?: CaveWhereInput | boolean
    delete?: CaveWhereInput | boolean
    connect?: CaveWhereUniqueInput
    update?: XOR<XOR<CaveUpdateToOneWithWhereWithoutAvisInput, CaveUpdateWithoutAvisInput>, CaveUncheckedUpdateWithoutAvisInput>
  }

  export type CaveCreateNestedOneWithoutCaveVinInput = {
    create?: XOR<CaveCreateWithoutCaveVinInput, CaveUncheckedCreateWithoutCaveVinInput>
    connectOrCreate?: CaveCreateOrConnectWithoutCaveVinInput
    connect?: CaveWhereUniqueInput
  }

  export type VinCreateNestedOneWithoutCaveVinsInput = {
    create?: XOR<VinCreateWithoutCaveVinsInput, VinUncheckedCreateWithoutCaveVinsInput>
    connectOrCreate?: VinCreateOrConnectWithoutCaveVinsInput
    connect?: VinWhereUniqueInput
  }

  export type CaveUpdateOneRequiredWithoutCaveVinNestedInput = {
    create?: XOR<CaveCreateWithoutCaveVinInput, CaveUncheckedCreateWithoutCaveVinInput>
    connectOrCreate?: CaveCreateOrConnectWithoutCaveVinInput
    upsert?: CaveUpsertWithoutCaveVinInput
    connect?: CaveWhereUniqueInput
    update?: XOR<XOR<CaveUpdateToOneWithWhereWithoutCaveVinInput, CaveUpdateWithoutCaveVinInput>, CaveUncheckedUpdateWithoutCaveVinInput>
  }

  export type VinUpdateOneRequiredWithoutCaveVinsNestedInput = {
    create?: XOR<VinCreateWithoutCaveVinsInput, VinUncheckedCreateWithoutCaveVinsInput>
    connectOrCreate?: VinCreateOrConnectWithoutCaveVinsInput
    upsert?: VinUpsertWithoutCaveVinsInput
    connect?: VinWhereUniqueInput
    update?: XOR<XOR<VinUpdateToOneWithWhereWithoutCaveVinsInput, VinUpdateWithoutCaveVinsInput>, VinUncheckedUpdateWithoutCaveVinsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CaveCreateWithoutUtilisateurInput = {
    id?: string
    nom: string
    vins?: VinCreateNestedManyWithoutCavesInput
    avis?: AvisCreateNestedManyWithoutCaveInput
    CaveVin?: CaveVinCreateNestedManyWithoutCaveInput
  }

  export type CaveUncheckedCreateWithoutUtilisateurInput = {
    id?: string
    nom: string
    vins?: VinUncheckedCreateNestedManyWithoutCavesInput
    avis?: AvisUncheckedCreateNestedManyWithoutCaveInput
    CaveVin?: CaveVinUncheckedCreateNestedManyWithoutCaveInput
  }

  export type CaveCreateOrConnectWithoutUtilisateurInput = {
    where: CaveWhereUniqueInput
    create: XOR<CaveCreateWithoutUtilisateurInput, CaveUncheckedCreateWithoutUtilisateurInput>
  }

  export type CaveCreateManyUtilisateurInputEnvelope = {
    data: CaveCreateManyUtilisateurInput | CaveCreateManyUtilisateurInput[]
    skipDuplicates?: boolean
  }

  export type CaveUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: CaveWhereUniqueInput
    update: XOR<CaveUpdateWithoutUtilisateurInput, CaveUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<CaveCreateWithoutUtilisateurInput, CaveUncheckedCreateWithoutUtilisateurInput>
  }

  export type CaveUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: CaveWhereUniqueInput
    data: XOR<CaveUpdateWithoutUtilisateurInput, CaveUncheckedUpdateWithoutUtilisateurInput>
  }

  export type CaveUpdateManyWithWhereWithoutUtilisateurInput = {
    where: CaveScalarWhereInput
    data: XOR<CaveUpdateManyMutationInput, CaveUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type CaveScalarWhereInput = {
    AND?: CaveScalarWhereInput | CaveScalarWhereInput[]
    OR?: CaveScalarWhereInput[]
    NOT?: CaveScalarWhereInput | CaveScalarWhereInput[]
    id?: StringFilter<"Cave"> | string
    nom?: StringFilter<"Cave"> | string
    utilisateurId?: StringFilter<"Cave"> | string
  }

  export type AvisCreateWithoutVinInput = {
    id?: string
    note: number
    commentaire?: string | null
    cave?: CaveCreateNestedOneWithoutAvisInput
  }

  export type AvisUncheckedCreateWithoutVinInput = {
    id?: string
    note: number
    commentaire?: string | null
    caveId?: string | null
  }

  export type AvisCreateOrConnectWithoutVinInput = {
    where: AvisWhereUniqueInput
    create: XOR<AvisCreateWithoutVinInput, AvisUncheckedCreateWithoutVinInput>
  }

  export type AvisCreateManyVinInputEnvelope = {
    data: AvisCreateManyVinInput | AvisCreateManyVinInput[]
    skipDuplicates?: boolean
  }

  export type CaveCreateWithoutVinsInput = {
    id?: string
    nom: string
    utilisateur: UtilisateurCreateNestedOneWithoutCavesInput
    avis?: AvisCreateNestedManyWithoutCaveInput
    CaveVin?: CaveVinCreateNestedManyWithoutCaveInput
  }

  export type CaveUncheckedCreateWithoutVinsInput = {
    id?: string
    nom: string
    utilisateurId: string
    avis?: AvisUncheckedCreateNestedManyWithoutCaveInput
    CaveVin?: CaveVinUncheckedCreateNestedManyWithoutCaveInput
  }

  export type CaveCreateOrConnectWithoutVinsInput = {
    where: CaveWhereUniqueInput
    create: XOR<CaveCreateWithoutVinsInput, CaveUncheckedCreateWithoutVinsInput>
  }

  export type CaveVinCreateWithoutVinInput = {
    cave: CaveCreateNestedOneWithoutCaveVinInput
  }

  export type CaveVinUncheckedCreateWithoutVinInput = {
    caveId: string
  }

  export type CaveVinCreateOrConnectWithoutVinInput = {
    where: CaveVinWhereUniqueInput
    create: XOR<CaveVinCreateWithoutVinInput, CaveVinUncheckedCreateWithoutVinInput>
  }

  export type CaveVinCreateManyVinInputEnvelope = {
    data: CaveVinCreateManyVinInput | CaveVinCreateManyVinInput[]
    skipDuplicates?: boolean
  }

  export type AvisUpsertWithWhereUniqueWithoutVinInput = {
    where: AvisWhereUniqueInput
    update: XOR<AvisUpdateWithoutVinInput, AvisUncheckedUpdateWithoutVinInput>
    create: XOR<AvisCreateWithoutVinInput, AvisUncheckedCreateWithoutVinInput>
  }

  export type AvisUpdateWithWhereUniqueWithoutVinInput = {
    where: AvisWhereUniqueInput
    data: XOR<AvisUpdateWithoutVinInput, AvisUncheckedUpdateWithoutVinInput>
  }

  export type AvisUpdateManyWithWhereWithoutVinInput = {
    where: AvisScalarWhereInput
    data: XOR<AvisUpdateManyMutationInput, AvisUncheckedUpdateManyWithoutVinInput>
  }

  export type AvisScalarWhereInput = {
    AND?: AvisScalarWhereInput | AvisScalarWhereInput[]
    OR?: AvisScalarWhereInput[]
    NOT?: AvisScalarWhereInput | AvisScalarWhereInput[]
    id?: StringFilter<"Avis"> | string
    note?: IntFilter<"Avis"> | number
    commentaire?: StringNullableFilter<"Avis"> | string | null
    vinId?: StringFilter<"Avis"> | string
    caveId?: StringNullableFilter<"Avis"> | string | null
  }

  export type CaveUpsertWithWhereUniqueWithoutVinsInput = {
    where: CaveWhereUniqueInput
    update: XOR<CaveUpdateWithoutVinsInput, CaveUncheckedUpdateWithoutVinsInput>
    create: XOR<CaveCreateWithoutVinsInput, CaveUncheckedCreateWithoutVinsInput>
  }

  export type CaveUpdateWithWhereUniqueWithoutVinsInput = {
    where: CaveWhereUniqueInput
    data: XOR<CaveUpdateWithoutVinsInput, CaveUncheckedUpdateWithoutVinsInput>
  }

  export type CaveUpdateManyWithWhereWithoutVinsInput = {
    where: CaveScalarWhereInput
    data: XOR<CaveUpdateManyMutationInput, CaveUncheckedUpdateManyWithoutVinsInput>
  }

  export type CaveVinUpsertWithWhereUniqueWithoutVinInput = {
    where: CaveVinWhereUniqueInput
    update: XOR<CaveVinUpdateWithoutVinInput, CaveVinUncheckedUpdateWithoutVinInput>
    create: XOR<CaveVinCreateWithoutVinInput, CaveVinUncheckedCreateWithoutVinInput>
  }

  export type CaveVinUpdateWithWhereUniqueWithoutVinInput = {
    where: CaveVinWhereUniqueInput
    data: XOR<CaveVinUpdateWithoutVinInput, CaveVinUncheckedUpdateWithoutVinInput>
  }

  export type CaveVinUpdateManyWithWhereWithoutVinInput = {
    where: CaveVinScalarWhereInput
    data: XOR<CaveVinUpdateManyMutationInput, CaveVinUncheckedUpdateManyWithoutVinInput>
  }

  export type CaveVinScalarWhereInput = {
    AND?: CaveVinScalarWhereInput | CaveVinScalarWhereInput[]
    OR?: CaveVinScalarWhereInput[]
    NOT?: CaveVinScalarWhereInput | CaveVinScalarWhereInput[]
    caveId?: StringFilter<"CaveVin"> | string
    vinId?: StringFilter<"CaveVin"> | string
  }

  export type UtilisateurCreateWithoutCavesInput = {
    id?: string
    pseudonyme: string
    email: string
    password: string
  }

  export type UtilisateurUncheckedCreateWithoutCavesInput = {
    id?: string
    pseudonyme: string
    email: string
    password: string
  }

  export type UtilisateurCreateOrConnectWithoutCavesInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutCavesInput, UtilisateurUncheckedCreateWithoutCavesInput>
  }

  export type VinCreateWithoutCavesInput = {
    id?: string
    couleur: string
    annee: number
    appellation?: string | null
    nom: string
    quantite: number
    is_consumed: boolean
    favoris: boolean
    avis?: AvisCreateNestedManyWithoutVinInput
    caveVins?: CaveVinCreateNestedManyWithoutVinInput
  }

  export type VinUncheckedCreateWithoutCavesInput = {
    id?: string
    couleur: string
    annee: number
    appellation?: string | null
    nom: string
    quantite: number
    is_consumed: boolean
    favoris: boolean
    avis?: AvisUncheckedCreateNestedManyWithoutVinInput
    caveVins?: CaveVinUncheckedCreateNestedManyWithoutVinInput
  }

  export type VinCreateOrConnectWithoutCavesInput = {
    where: VinWhereUniqueInput
    create: XOR<VinCreateWithoutCavesInput, VinUncheckedCreateWithoutCavesInput>
  }

  export type AvisCreateWithoutCaveInput = {
    id?: string
    note: number
    commentaire?: string | null
    vin: VinCreateNestedOneWithoutAvisInput
  }

  export type AvisUncheckedCreateWithoutCaveInput = {
    id?: string
    note: number
    commentaire?: string | null
    vinId: string
  }

  export type AvisCreateOrConnectWithoutCaveInput = {
    where: AvisWhereUniqueInput
    create: XOR<AvisCreateWithoutCaveInput, AvisUncheckedCreateWithoutCaveInput>
  }

  export type AvisCreateManyCaveInputEnvelope = {
    data: AvisCreateManyCaveInput | AvisCreateManyCaveInput[]
    skipDuplicates?: boolean
  }

  export type CaveVinCreateWithoutCaveInput = {
    vin: VinCreateNestedOneWithoutCaveVinsInput
  }

  export type CaveVinUncheckedCreateWithoutCaveInput = {
    vinId: string
  }

  export type CaveVinCreateOrConnectWithoutCaveInput = {
    where: CaveVinWhereUniqueInput
    create: XOR<CaveVinCreateWithoutCaveInput, CaveVinUncheckedCreateWithoutCaveInput>
  }

  export type CaveVinCreateManyCaveInputEnvelope = {
    data: CaveVinCreateManyCaveInput | CaveVinCreateManyCaveInput[]
    skipDuplicates?: boolean
  }

  export type UtilisateurUpsertWithoutCavesInput = {
    update: XOR<UtilisateurUpdateWithoutCavesInput, UtilisateurUncheckedUpdateWithoutCavesInput>
    create: XOR<UtilisateurCreateWithoutCavesInput, UtilisateurUncheckedCreateWithoutCavesInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutCavesInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutCavesInput, UtilisateurUncheckedUpdateWithoutCavesInput>
  }

  export type UtilisateurUpdateWithoutCavesInput = {
    id?: StringFieldUpdateOperationsInput | string
    pseudonyme?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UtilisateurUncheckedUpdateWithoutCavesInput = {
    id?: StringFieldUpdateOperationsInput | string
    pseudonyme?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type VinUpsertWithWhereUniqueWithoutCavesInput = {
    where: VinWhereUniqueInput
    update: XOR<VinUpdateWithoutCavesInput, VinUncheckedUpdateWithoutCavesInput>
    create: XOR<VinCreateWithoutCavesInput, VinUncheckedCreateWithoutCavesInput>
  }

  export type VinUpdateWithWhereUniqueWithoutCavesInput = {
    where: VinWhereUniqueInput
    data: XOR<VinUpdateWithoutCavesInput, VinUncheckedUpdateWithoutCavesInput>
  }

  export type VinUpdateManyWithWhereWithoutCavesInput = {
    where: VinScalarWhereInput
    data: XOR<VinUpdateManyMutationInput, VinUncheckedUpdateManyWithoutCavesInput>
  }

  export type VinScalarWhereInput = {
    AND?: VinScalarWhereInput | VinScalarWhereInput[]
    OR?: VinScalarWhereInput[]
    NOT?: VinScalarWhereInput | VinScalarWhereInput[]
    id?: StringFilter<"Vin"> | string
    couleur?: StringFilter<"Vin"> | string
    annee?: IntFilter<"Vin"> | number
    appellation?: StringNullableFilter<"Vin"> | string | null
    nom?: StringFilter<"Vin"> | string
    quantite?: IntFilter<"Vin"> | number
    is_consumed?: BoolFilter<"Vin"> | boolean
    favoris?: BoolFilter<"Vin"> | boolean
  }

  export type AvisUpsertWithWhereUniqueWithoutCaveInput = {
    where: AvisWhereUniqueInput
    update: XOR<AvisUpdateWithoutCaveInput, AvisUncheckedUpdateWithoutCaveInput>
    create: XOR<AvisCreateWithoutCaveInput, AvisUncheckedCreateWithoutCaveInput>
  }

  export type AvisUpdateWithWhereUniqueWithoutCaveInput = {
    where: AvisWhereUniqueInput
    data: XOR<AvisUpdateWithoutCaveInput, AvisUncheckedUpdateWithoutCaveInput>
  }

  export type AvisUpdateManyWithWhereWithoutCaveInput = {
    where: AvisScalarWhereInput
    data: XOR<AvisUpdateManyMutationInput, AvisUncheckedUpdateManyWithoutCaveInput>
  }

  export type CaveVinUpsertWithWhereUniqueWithoutCaveInput = {
    where: CaveVinWhereUniqueInput
    update: XOR<CaveVinUpdateWithoutCaveInput, CaveVinUncheckedUpdateWithoutCaveInput>
    create: XOR<CaveVinCreateWithoutCaveInput, CaveVinUncheckedCreateWithoutCaveInput>
  }

  export type CaveVinUpdateWithWhereUniqueWithoutCaveInput = {
    where: CaveVinWhereUniqueInput
    data: XOR<CaveVinUpdateWithoutCaveInput, CaveVinUncheckedUpdateWithoutCaveInput>
  }

  export type CaveVinUpdateManyWithWhereWithoutCaveInput = {
    where: CaveVinScalarWhereInput
    data: XOR<CaveVinUpdateManyMutationInput, CaveVinUncheckedUpdateManyWithoutCaveInput>
  }

  export type VinCreateWithoutAvisInput = {
    id?: string
    couleur: string
    annee: number
    appellation?: string | null
    nom: string
    quantite: number
    is_consumed: boolean
    favoris: boolean
    caves?: CaveCreateNestedManyWithoutVinsInput
    caveVins?: CaveVinCreateNestedManyWithoutVinInput
  }

  export type VinUncheckedCreateWithoutAvisInput = {
    id?: string
    couleur: string
    annee: number
    appellation?: string | null
    nom: string
    quantite: number
    is_consumed: boolean
    favoris: boolean
    caves?: CaveUncheckedCreateNestedManyWithoutVinsInput
    caveVins?: CaveVinUncheckedCreateNestedManyWithoutVinInput
  }

  export type VinCreateOrConnectWithoutAvisInput = {
    where: VinWhereUniqueInput
    create: XOR<VinCreateWithoutAvisInput, VinUncheckedCreateWithoutAvisInput>
  }

  export type CaveCreateWithoutAvisInput = {
    id?: string
    nom: string
    utilisateur: UtilisateurCreateNestedOneWithoutCavesInput
    vins?: VinCreateNestedManyWithoutCavesInput
    CaveVin?: CaveVinCreateNestedManyWithoutCaveInput
  }

  export type CaveUncheckedCreateWithoutAvisInput = {
    id?: string
    nom: string
    utilisateurId: string
    vins?: VinUncheckedCreateNestedManyWithoutCavesInput
    CaveVin?: CaveVinUncheckedCreateNestedManyWithoutCaveInput
  }

  export type CaveCreateOrConnectWithoutAvisInput = {
    where: CaveWhereUniqueInput
    create: XOR<CaveCreateWithoutAvisInput, CaveUncheckedCreateWithoutAvisInput>
  }

  export type VinUpsertWithoutAvisInput = {
    update: XOR<VinUpdateWithoutAvisInput, VinUncheckedUpdateWithoutAvisInput>
    create: XOR<VinCreateWithoutAvisInput, VinUncheckedCreateWithoutAvisInput>
    where?: VinWhereInput
  }

  export type VinUpdateToOneWithWhereWithoutAvisInput = {
    where?: VinWhereInput
    data: XOR<VinUpdateWithoutAvisInput, VinUncheckedUpdateWithoutAvisInput>
  }

  export type VinUpdateWithoutAvisInput = {
    id?: StringFieldUpdateOperationsInput | string
    couleur?: StringFieldUpdateOperationsInput | string
    annee?: IntFieldUpdateOperationsInput | number
    appellation?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    is_consumed?: BoolFieldUpdateOperationsInput | boolean
    favoris?: BoolFieldUpdateOperationsInput | boolean
    caves?: CaveUpdateManyWithoutVinsNestedInput
    caveVins?: CaveVinUpdateManyWithoutVinNestedInput
  }

  export type VinUncheckedUpdateWithoutAvisInput = {
    id?: StringFieldUpdateOperationsInput | string
    couleur?: StringFieldUpdateOperationsInput | string
    annee?: IntFieldUpdateOperationsInput | number
    appellation?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    is_consumed?: BoolFieldUpdateOperationsInput | boolean
    favoris?: BoolFieldUpdateOperationsInput | boolean
    caves?: CaveUncheckedUpdateManyWithoutVinsNestedInput
    caveVins?: CaveVinUncheckedUpdateManyWithoutVinNestedInput
  }

  export type CaveUpsertWithoutAvisInput = {
    update: XOR<CaveUpdateWithoutAvisInput, CaveUncheckedUpdateWithoutAvisInput>
    create: XOR<CaveCreateWithoutAvisInput, CaveUncheckedCreateWithoutAvisInput>
    where?: CaveWhereInput
  }

  export type CaveUpdateToOneWithWhereWithoutAvisInput = {
    where?: CaveWhereInput
    data: XOR<CaveUpdateWithoutAvisInput, CaveUncheckedUpdateWithoutAvisInput>
  }

  export type CaveUpdateWithoutAvisInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutCavesNestedInput
    vins?: VinUpdateManyWithoutCavesNestedInput
    CaveVin?: CaveVinUpdateManyWithoutCaveNestedInput
  }

  export type CaveUncheckedUpdateWithoutAvisInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    utilisateurId?: StringFieldUpdateOperationsInput | string
    vins?: VinUncheckedUpdateManyWithoutCavesNestedInput
    CaveVin?: CaveVinUncheckedUpdateManyWithoutCaveNestedInput
  }

  export type CaveCreateWithoutCaveVinInput = {
    id?: string
    nom: string
    utilisateur: UtilisateurCreateNestedOneWithoutCavesInput
    vins?: VinCreateNestedManyWithoutCavesInput
    avis?: AvisCreateNestedManyWithoutCaveInput
  }

  export type CaveUncheckedCreateWithoutCaveVinInput = {
    id?: string
    nom: string
    utilisateurId: string
    vins?: VinUncheckedCreateNestedManyWithoutCavesInput
    avis?: AvisUncheckedCreateNestedManyWithoutCaveInput
  }

  export type CaveCreateOrConnectWithoutCaveVinInput = {
    where: CaveWhereUniqueInput
    create: XOR<CaveCreateWithoutCaveVinInput, CaveUncheckedCreateWithoutCaveVinInput>
  }

  export type VinCreateWithoutCaveVinsInput = {
    id?: string
    couleur: string
    annee: number
    appellation?: string | null
    nom: string
    quantite: number
    is_consumed: boolean
    favoris: boolean
    avis?: AvisCreateNestedManyWithoutVinInput
    caves?: CaveCreateNestedManyWithoutVinsInput
  }

  export type VinUncheckedCreateWithoutCaveVinsInput = {
    id?: string
    couleur: string
    annee: number
    appellation?: string | null
    nom: string
    quantite: number
    is_consumed: boolean
    favoris: boolean
    avis?: AvisUncheckedCreateNestedManyWithoutVinInput
    caves?: CaveUncheckedCreateNestedManyWithoutVinsInput
  }

  export type VinCreateOrConnectWithoutCaveVinsInput = {
    where: VinWhereUniqueInput
    create: XOR<VinCreateWithoutCaveVinsInput, VinUncheckedCreateWithoutCaveVinsInput>
  }

  export type CaveUpsertWithoutCaveVinInput = {
    update: XOR<CaveUpdateWithoutCaveVinInput, CaveUncheckedUpdateWithoutCaveVinInput>
    create: XOR<CaveCreateWithoutCaveVinInput, CaveUncheckedCreateWithoutCaveVinInput>
    where?: CaveWhereInput
  }

  export type CaveUpdateToOneWithWhereWithoutCaveVinInput = {
    where?: CaveWhereInput
    data: XOR<CaveUpdateWithoutCaveVinInput, CaveUncheckedUpdateWithoutCaveVinInput>
  }

  export type CaveUpdateWithoutCaveVinInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutCavesNestedInput
    vins?: VinUpdateManyWithoutCavesNestedInput
    avis?: AvisUpdateManyWithoutCaveNestedInput
  }

  export type CaveUncheckedUpdateWithoutCaveVinInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    utilisateurId?: StringFieldUpdateOperationsInput | string
    vins?: VinUncheckedUpdateManyWithoutCavesNestedInput
    avis?: AvisUncheckedUpdateManyWithoutCaveNestedInput
  }

  export type VinUpsertWithoutCaveVinsInput = {
    update: XOR<VinUpdateWithoutCaveVinsInput, VinUncheckedUpdateWithoutCaveVinsInput>
    create: XOR<VinCreateWithoutCaveVinsInput, VinUncheckedCreateWithoutCaveVinsInput>
    where?: VinWhereInput
  }

  export type VinUpdateToOneWithWhereWithoutCaveVinsInput = {
    where?: VinWhereInput
    data: XOR<VinUpdateWithoutCaveVinsInput, VinUncheckedUpdateWithoutCaveVinsInput>
  }

  export type VinUpdateWithoutCaveVinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    couleur?: StringFieldUpdateOperationsInput | string
    annee?: IntFieldUpdateOperationsInput | number
    appellation?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    is_consumed?: BoolFieldUpdateOperationsInput | boolean
    favoris?: BoolFieldUpdateOperationsInput | boolean
    avis?: AvisUpdateManyWithoutVinNestedInput
    caves?: CaveUpdateManyWithoutVinsNestedInput
  }

  export type VinUncheckedUpdateWithoutCaveVinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    couleur?: StringFieldUpdateOperationsInput | string
    annee?: IntFieldUpdateOperationsInput | number
    appellation?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    is_consumed?: BoolFieldUpdateOperationsInput | boolean
    favoris?: BoolFieldUpdateOperationsInput | boolean
    avis?: AvisUncheckedUpdateManyWithoutVinNestedInput
    caves?: CaveUncheckedUpdateManyWithoutVinsNestedInput
  }

  export type CaveCreateManyUtilisateurInput = {
    id?: string
    nom: string
  }

  export type CaveUpdateWithoutUtilisateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    vins?: VinUpdateManyWithoutCavesNestedInput
    avis?: AvisUpdateManyWithoutCaveNestedInput
    CaveVin?: CaveVinUpdateManyWithoutCaveNestedInput
  }

  export type CaveUncheckedUpdateWithoutUtilisateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    vins?: VinUncheckedUpdateManyWithoutCavesNestedInput
    avis?: AvisUncheckedUpdateManyWithoutCaveNestedInput
    CaveVin?: CaveVinUncheckedUpdateManyWithoutCaveNestedInput
  }

  export type CaveUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
  }

  export type AvisCreateManyVinInput = {
    id?: string
    note: number
    commentaire?: string | null
    caveId?: string | null
  }

  export type CaveVinCreateManyVinInput = {
    caveId: string
  }

  export type AvisUpdateWithoutVinInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: IntFieldUpdateOperationsInput | number
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    cave?: CaveUpdateOneWithoutAvisNestedInput
  }

  export type AvisUncheckedUpdateWithoutVinInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: IntFieldUpdateOperationsInput | number
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    caveId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AvisUncheckedUpdateManyWithoutVinInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: IntFieldUpdateOperationsInput | number
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    caveId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CaveUpdateWithoutVinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutCavesNestedInput
    avis?: AvisUpdateManyWithoutCaveNestedInput
    CaveVin?: CaveVinUpdateManyWithoutCaveNestedInput
  }

  export type CaveUncheckedUpdateWithoutVinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    utilisateurId?: StringFieldUpdateOperationsInput | string
    avis?: AvisUncheckedUpdateManyWithoutCaveNestedInput
    CaveVin?: CaveVinUncheckedUpdateManyWithoutCaveNestedInput
  }

  export type CaveUncheckedUpdateManyWithoutVinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    utilisateurId?: StringFieldUpdateOperationsInput | string
  }

  export type CaveVinUpdateWithoutVinInput = {
    cave?: CaveUpdateOneRequiredWithoutCaveVinNestedInput
  }

  export type CaveVinUncheckedUpdateWithoutVinInput = {
    caveId?: StringFieldUpdateOperationsInput | string
  }

  export type CaveVinUncheckedUpdateManyWithoutVinInput = {
    caveId?: StringFieldUpdateOperationsInput | string
  }

  export type AvisCreateManyCaveInput = {
    id?: string
    note: number
    commentaire?: string | null
    vinId: string
  }

  export type CaveVinCreateManyCaveInput = {
    vinId: string
  }

  export type VinUpdateWithoutCavesInput = {
    id?: StringFieldUpdateOperationsInput | string
    couleur?: StringFieldUpdateOperationsInput | string
    annee?: IntFieldUpdateOperationsInput | number
    appellation?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    is_consumed?: BoolFieldUpdateOperationsInput | boolean
    favoris?: BoolFieldUpdateOperationsInput | boolean
    avis?: AvisUpdateManyWithoutVinNestedInput
    caveVins?: CaveVinUpdateManyWithoutVinNestedInput
  }

  export type VinUncheckedUpdateWithoutCavesInput = {
    id?: StringFieldUpdateOperationsInput | string
    couleur?: StringFieldUpdateOperationsInput | string
    annee?: IntFieldUpdateOperationsInput | number
    appellation?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    is_consumed?: BoolFieldUpdateOperationsInput | boolean
    favoris?: BoolFieldUpdateOperationsInput | boolean
    avis?: AvisUncheckedUpdateManyWithoutVinNestedInput
    caveVins?: CaveVinUncheckedUpdateManyWithoutVinNestedInput
  }

  export type VinUncheckedUpdateManyWithoutCavesInput = {
    id?: StringFieldUpdateOperationsInput | string
    couleur?: StringFieldUpdateOperationsInput | string
    annee?: IntFieldUpdateOperationsInput | number
    appellation?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    is_consumed?: BoolFieldUpdateOperationsInput | boolean
    favoris?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AvisUpdateWithoutCaveInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: IntFieldUpdateOperationsInput | number
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    vin?: VinUpdateOneRequiredWithoutAvisNestedInput
  }

  export type AvisUncheckedUpdateWithoutCaveInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: IntFieldUpdateOperationsInput | number
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    vinId?: StringFieldUpdateOperationsInput | string
  }

  export type AvisUncheckedUpdateManyWithoutCaveInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: IntFieldUpdateOperationsInput | number
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    vinId?: StringFieldUpdateOperationsInput | string
  }

  export type CaveVinUpdateWithoutCaveInput = {
    vin?: VinUpdateOneRequiredWithoutCaveVinsNestedInput
  }

  export type CaveVinUncheckedUpdateWithoutCaveInput = {
    vinId?: StringFieldUpdateOperationsInput | string
  }

  export type CaveVinUncheckedUpdateManyWithoutCaveInput = {
    vinId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}