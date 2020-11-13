# suspense-data-loader

Experimental.

# API

## Table of contents

- [function createDataCache](#function-createdatacache)
- [function useDataLoader](#function-usedataloader)
- [function usePreloadedData](#function-usepreloadeddata)
- [constant GraphQLContext](#constant-graphqlcontext)
- [type CacheKey](#type-cachekey)
- [type CreateSubscriptionAPI](#type-createsubscriptionapi)
- [type DataCache](#type-datacache)
- [type UseDataLoaderAPI](#type-usedataloaderapi)

## function createDataCache

Creates a data cache.

| Property     | Type   | Description                                                       |
| :----------- | :----- | :---------------------------------------------------------------- |
| `maxEntries` | number | The maximum allowed cache entries before old entries are dropped. |

| Parameter     | Type   | Description                |
| :------------ | :----- | :------------------------- |
| `userOptions` | object | User configurable options. |

**Returns:** [DataCache](#type-datacache) — A dataCache object.

* * *

## function useDataLoader

React hook that returns a cache reference and load function for a specified cache key.

| Parameter | Type                       | Description  |
| :-------- | :------------------------- | :----------- |
| `key`     | [CacheKey](#type-cachekey) | A cache key. |

**Returns:** [UseDataLoaderAPI](#type-usedataloaderapi) — The useDataLoader API.

* * *

## function usePreloadedData

Access preloaded data, suspends if data is unavailable.

| Parameter   | Type           | Description        |
| :---------- | :------------- | :----------------- |
| `reference` | CacheReference | A cache reference. |

**Returns:** \* — The cached value

* * *

## constant GraphQLContext

A React context.

**Type:** object

| Property   | Type     | Description                                                                           |
| :--------- | :------- | :------------------------------------------------------------------------------------ |
| `Provider` | Function | [React context provider component](https://reactjs.org/docs/context#contextprovider). |
| `Consumer` | Function | [React context consumer component](https://reactjs.org/docs/context#contextconsumer). |

* * *

## type CacheKey

**Type:** string | Array&lt;string | number>

* * *

## type CreateSubscriptionAPI

The API provided by the useAuthentication hook.

**Type:** object

| Property    | Type     | Description          |
| :---------- | :------- | :------------------- |
| `notify`    | Function | Send an event.       |
| `subscribe` | Function | Subscribe to events. |

* * *

## type DataCache

A dataCache object.

**Type:** object

| Property | Type     | Description             |
| :------- | :------- | :---------------------- |
| `cache`  | Map      | The cache.              |
| `get`    | Function | Internal API.           |
| `set`    | Function | Internal API.           |
| `load`   | Function | Load asynchronous data. |
| `reset`  | Function | Resets the cache.       |

* * *

## type UseDataLoaderAPI

The useDataLoader API.

**Type:** Array

| Property | Type           | Description                          |
| :------- | :------------- | :----------------------------------- |
| `0`      | CacheReference | The cache reference.                 |
| `1`      | Function       | Loads data for this cache reference. |
