currentDirectory:: / useCaseSensitiveFileNames: false
Info 0    [00:00:09.000] Provided types map file "/a/lib/typesMap.json" doesn't exist
Before request
//// [/a.ts]
import { B } from "./b";

//// [/b.d.ts]
export declare class B {}

//// [/b.js]
export class B {}


Info 1    [00:00:10.000] request:
    {
      "command": "open",
      "arguments": {
        "file": "/a.ts"
      },
      "seq": 1,
      "type": "request"
    }
Info 2    [00:00:11.000] Search path: /
Info 3    [00:00:12.000] For info: /a.ts :: No config files found.
Info 4    [00:00:13.000] Starting updateGraphWorker: Project: /dev/null/inferredProject1*
Info 5    [00:00:14.000] DirectoryWatcher:: Added:: WatchInfo: / 0 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info 6    [00:00:15.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: / 0 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info 7    [00:00:16.000] FileWatcher:: Added:: WatchInfo: /b.d.ts 500 undefined WatchType: Closed Script info
Info 8    [00:00:17.000] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined Project: /dev/null/inferredProject1* WatchType: Missing file
Info 9    [00:00:18.000] DirectoryWatcher:: Added:: WatchInfo: /node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info 10   [00:00:19.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info 11   [00:00:20.000] Finishing updateGraphWorker: Project: /dev/null/inferredProject1* Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 12   [00:00:21.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 13   [00:00:22.000] 	Files (2)
	/b.d.ts Text-1 "export declare class B {}"
	/a.ts SVC-1-0 "import { B } from \"./b\";"


	b.d.ts
	  Imported via "./b" from file 'a.ts'
	a.ts
	  Root file specified for compilation

Info 14   [00:00:23.000] -----------------------------------------------
Info 15   [00:00:24.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 15   [00:00:25.000] 	Files (2)

Info 15   [00:00:26.000] -----------------------------------------------
Info 15   [00:00:27.000] Open files: 
Info 15   [00:00:28.000] 	FileName: /a.ts ProjectRootPath: undefined
Info 15   [00:00:29.000] 		Projects: /dev/null/inferredProject1*
Info 15   [00:00:30.000] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/a/lib/lib.d.ts: *new*
  {"pollingInterval":500}
/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/: *new*
  {}
/b.d.ts: *new*
  {}

Info 16   [00:00:31.000] Starting updateGraphWorker: Project: /dev/null/auxiliaryProject1*
Info 17   [00:00:32.000] FileWatcher:: Added:: WatchInfo: /b.js 500 undefined WatchType: Closed Script info
Info 18   [00:00:33.000] Finishing updateGraphWorker: Project: /dev/null/auxiliaryProject1* Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 19   [00:00:34.000] Project '/dev/null/auxiliaryProject1*' (Auxiliary)
Info 20   [00:00:35.000] 	Files (2)
	/b.js Text-1 "export class B {}"
	/a.ts SVC-1-0 "import { B } from \"./b\";"


	b.js
	  Imported via "./b" from file 'a.ts'
	a.ts
	  Root file specified for compilation

Info 21   [00:00:36.000] -----------------------------------------------
Before request

PolledWatches::
/a/lib/lib.d.ts:
  {"pollingInterval":500}
/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/:
  {}
/b.d.ts:
  {}
/b.js: *new*
  {}

Info 22   [00:00:37.000] request:
    {
      "command": "open",
      "arguments": {
        "file": "/b.js"
      },
      "seq": 2,
      "type": "request"
    }
Info 23   [00:00:38.000] FileWatcher:: Close:: WatchInfo: /b.js 500 undefined WatchType: Closed Script info
Info 24   [00:00:39.000] Search path: /
Info 25   [00:00:40.000] For info: /b.js :: No config files found.
Info 26   [00:00:41.000] Starting updateGraphWorker: Project: /dev/null/inferredProject2*
Info 27   [00:00:42.000] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined Project: /dev/null/inferredProject2* WatchType: Missing file
Info 28   [00:00:43.000] DirectoryWatcher:: Added:: WatchInfo: /node_modules/@types 1 undefined Project: /dev/null/inferredProject2* WatchType: Type roots
Info 29   [00:00:44.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /node_modules/@types 1 undefined Project: /dev/null/inferredProject2* WatchType: Type roots
Info 30   [00:00:45.000] Finishing updateGraphWorker: Project: /dev/null/inferredProject2* Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 31   [00:00:46.000] Project '/dev/null/inferredProject2*' (Inferred)
Info 32   [00:00:47.000] 	Files (1)
	/b.js Text-1 "export class B {}"


	b.js
	  Root file specified for compilation

Info 33   [00:00:48.000] -----------------------------------------------
TI:: Creating typing installer

PolledWatches::
/a/lib/lib.d.ts:
  {"pollingInterval":500}
/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/:
  {}
/b.d.ts:
  {}

FsWatches *deleted*::
/b.js:
  {}

TI:: [00:00:49.000] Global cache location '/a/data/', safe file path '/safeList.json', types map path /typesMap.json
TI:: [00:00:50.000] Processing cache location '/a/data/'
TI:: [00:00:51.000] Trying to find '/a/data/package.json'...
TI:: [00:00:52.000] Finished processing cache location '/a/data/'
TI:: [00:00:53.000] Npm config file: /a/data/package.json
TI:: [00:00:54.000] Npm config file: '/a/data/package.json' is missing, creating new one...
Info 34   [00:00:57.000] DirectoryWatcher:: Triggered with /a :: WatchInfo: / 0 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info 35   [00:00:58.000] Elapsed:: *ms DirectoryWatcher:: Triggered with /a :: WatchInfo: / 0 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
TI:: [00:01:03.000] Updating types-registry npm package...
TI:: [00:01:04.000] npm install --ignore-scripts types-registry@latest
TI:: [00:01:11.000] TI:: Updated types-registry npm package
TI:: typing installer creation complete
//// [/a/data/package.json]
{ "private": true }

//// [/a/data/node_modules/types-registry/index.json]
{
 "entries": {}
}


TI:: [00:01:12.000] Got install request {"projectName":"/dev/null/inferredProject2*","fileNames":["/b.js"],"compilerOptions":{"target":1,"jsx":1,"allowNonTsExtensions":true,"allowJs":true,"noEmitForJsFiles":true,"maxNodeModuleJsDepth":2},"typeAcquisition":{"enable":true,"include":[],"exclude":[]},"unresolvedImports":[],"projectRootPath":"/","cachePath":"/a/data/","kind":"discover"}
TI:: [00:01:13.000] Request specifies cache path '/a/data/', loading cached information...
TI:: [00:01:14.000] Processing cache location '/a/data/'
TI:: [00:01:15.000] Cache location was already processed...
TI:: [00:01:16.000] Failed to load safelist from types map file '/typesMap.json'
TI:: [00:01:17.000] Explicitly included types: []
TI:: [00:01:18.000] Inferred typings from unresolved imports: []
TI:: [00:01:19.000] Result: {"cachedTypingPaths":[],"newTypingNames":[],"filesToWatch":["/bower_components","/node_modules"]}
TI:: [00:01:20.000] Finished typings discovery: {"cachedTypingPaths":[],"newTypingNames":[],"filesToWatch":["/bower_components","/node_modules"]}
TI:: [00:01:21.000] DirectoryWatcher:: Added:: WatchInfo: /bower_components
TI:: [00:01:22.000] DirectoryWatcher:: Added:: WatchInfo: /bower_components 1 undefined Project: /dev/null/inferredProject2* watcher already invoked: false
TI:: [00:01:23.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /bower_components 1 undefined Project: /dev/null/inferredProject2* watcher already invoked: false
TI:: [00:01:24.000] DirectoryWatcher:: Added:: WatchInfo: /node_modules
TI:: [00:01:25.000] DirectoryWatcher:: Added:: WatchInfo: /node_modules 1 undefined Project: /dev/null/inferredProject2* watcher already invoked: false
TI:: [00:01:26.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /node_modules 1 undefined Project: /dev/null/inferredProject2* watcher already invoked: false
TI:: [00:01:27.000] Sending response:
    {"projectName":"/dev/null/inferredProject2*","typeAcquisition":{"enable":true,"include":[],"exclude":[]},"compilerOptions":{"target":1,"jsx":1,"allowNonTsExtensions":true,"allowJs":true,"noEmitForJsFiles":true,"maxNodeModuleJsDepth":2},"typings":[],"unresolvedImports":[],"kind":"action::set"}
TI:: [00:01:28.000] No new typings were requested as a result of typings discovery
Info 36   [00:01:29.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 36   [00:01:30.000] 	Files (2)

Info 36   [00:01:31.000] -----------------------------------------------
Info 36   [00:01:32.000] Project '/dev/null/inferredProject2*' (Inferred)
Info 36   [00:01:33.000] 	Files (1)

Info 36   [00:01:34.000] -----------------------------------------------
Info 36   [00:01:35.000] Open files: 
Info 36   [00:01:36.000] 	FileName: /a.ts ProjectRootPath: undefined
Info 36   [00:01:37.000] 		Projects: /dev/null/inferredProject1*,/dev/null/auxiliaryProject1*
Info 36   [00:01:38.000] 	FileName: /b.js ProjectRootPath: undefined
Info 36   [00:01:39.000] 		Projects: /dev/null/inferredProject2*,/dev/null/auxiliaryProject1*
Info 36   [00:01:40.000] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/a/lib/lib.d.ts:
  {"pollingInterval":500}
/node_modules/@types:
  {"pollingInterval":500}
/bower_components: *new*
  {"pollingInterval":500}
/node_modules: *new*
  {"pollingInterval":500}

FsWatches::
/:
  {}
/b.d.ts:
  {}
