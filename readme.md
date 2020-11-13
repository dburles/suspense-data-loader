# suspense-data-loader

Experimental. Does not support SSR.

# API

## Table of contents

- [function createDataCache](#function-createdatacache)
- [function useDataLoader](#function-usedataloader)
- [function usePreloadedData](#function-usepreloadeddata)
- [constant DataCacheContext](#constant-datacachecontext)
- [type CacheKey](#type-cachekey)
- [type DataCache](#type-datacache)
- [type DataCacheLoad](#type-datacacheload)
- [type UseDataLoaderAPI](#type-usedataloaderapi)
- [type UseDataLoaderLoad](#type-usedataloaderload)
- [type UsePreloadedDataOptions](#type-usepreloadeddataoptions)

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

| Parameter   | Type                                                     | Description                |
| :---------- | :------------------------------------------------------- | :------------------------- |
| `reference` | CacheReference                                           | A cache reference.         |
| `options`   | [UsePreloadedDataOptions](#type-usepreloadeddataoptions) | User configurable options. |

**Returns:** \* — The cached value

* * *

## constant DataCacheContext

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

## type DataCache

A dataCache object.

**Type:** object

| Property | Type                                 | Description             |
| :------- | :----------------------------------- | :---------------------- |
| `cache`  | Map                                  | The cache.              |
| `get`    | Function                             | Internal API.           |
| `set`    | Function                             | Internal API.           |
| `load`   | [DataCacheLoad](#type-datacacheload) | Load asynchronous data. |
| `reset`  | Function                             | Resets the cache.       |

* * *

## type DataCacheLoad

**Type:** function

| Parameter | Type                       | Description                        |
| :-------- | :------------------------- | :--------------------------------- |
| `key`     | [CacheKey](#type-cachekey) | A cache key.                       |
| `asyncFn` | function                   | A function that returns a Promise. |

* * *

## type UseDataLoaderAPI

The useDataLoader API.

**Type:** Array

| Property | Type                                         | Description                          |
| :------- | :------------------------------------------- | :----------------------------------- |
| `0`      | CacheReference                               | The cache reference.                 |
| `1`      | [UseDataLoaderLoad](#type-usedataloaderload) | Loads data for this cache reference. |

* * *

## type UseDataLoaderLoad

**Type:** function

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `asyncFn` | function | A function that returns a Promise. |

* * *

## type UsePreloadedDataOptions

usePreloadedData Options

**Type:** object

| Property        | Type    | Description                 |
| :-------------- | :------ | :-------------------------- |
| `reloadOnMount` | boolean | Disable reloading on mount. |
