currentDirectory:: / useCaseSensitiveFileNames: false
Info 0    [00:00:13.000] Provided types map file "/a/lib/typesMap.json" doesn't exist
Before request
//// [/a/file1.ts]
let x =1;

//// [/a/file2.js]
let x =1;

//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }


Info 1    [00:00:14.000] request:
    {
      "command": "open",
      "arguments": {
        "file": "/a/file1.ts"
      },
      "seq": 1,
      "type": "request"
    }
Info 2    [00:00:15.000] Search path: /a
Info 3    [00:00:16.000] For info: /a/file1.ts :: No config files found.
Info 4    [00:00:17.000] Starting updateGraphWorker: Project: /dev/null/inferredProject1*
Info 5    [00:00:18.000] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info 6    [00:00:19.000] DirectoryWatcher:: Added:: WatchInfo: /node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info 7    [00:00:20.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info 8    [00:00:21.000] Finishing updateGraphWorker: Project: /dev/null/inferredProject1* Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 9    [00:00:22.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 10   [00:00:23.000] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/a/file1.ts SVC-1-0 "let x =1;"


	a/lib/lib.d.ts
	  Default library for target 'es5'
	a/file1.ts
	  Root file specified for compilation

Info 11   [00:00:24.000] -----------------------------------------------
Info 12   [00:00:25.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 12   [00:00:26.000] 	Files (2)

Info 12   [00:00:27.000] -----------------------------------------------
Info 12   [00:00:28.000] Open files: 
Info 12   [00:00:29.000] 	FileName: /a/file1.ts ProjectRootPath: undefined
Info 12   [00:00:30.000] 		Projects: /dev/null/inferredProject1*
Info 12   [00:00:31.000] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts: *new*
  {}

maxNodeModuleJsDepth: undefined
Before request

Info 13   [00:00:32.000] request:
    {
      "command": "open",
      "arguments": {
        "file": "/a/file2.js"
      },
      "seq": 2,
      "type": "request"
    }
Info 14   [00:00:33.000] Search path: /a
Info 15   [00:00:34.000] For info: /a/file2.js :: No config files found.
Info 16   [00:00:35.000] DirectoryWatcher:: Close:: WatchInfo: /node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info 17   [00:00:36.000] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info 18   [00:00:37.000] Starting updateGraphWorker: Project: /dev/null/inferredProject1*
Info 19   [00:00:38.000] DirectoryWatcher:: Added:: WatchInfo: /node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info 20   [00:00:39.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info 21   [00:00:40.000] Finishing updateGraphWorker: Project: /dev/null/inferredProject1* Version: 2 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 22   [00:00:41.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 23   [00:00:42.000] 	Files (3)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/a/file1.ts SVC-1-0 "let x =1;"
	/a/file2.js SVC-1-0 "let x =1;"


	a/lib/lib.d.ts
	  Default library for target 'es5'
	a/file1.ts
	  Root file specified for compilation
	a/file2.js
	  Root file specified for compilation

Info 24   [00:00:43.000] -----------------------------------------------
Info 25   [00:00:44.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 25   [00:00:45.000] 	Files (3)

Info 25   [00:00:46.000] -----------------------------------------------
Info 25   [00:00:47.000] Open files: 
Info 25   [00:00:48.000] 	FileName: /a/file1.ts ProjectRootPath: undefined
Info 25   [00:00:49.000] 		Projects: /dev/null/inferredProject1*
Info 25   [00:00:50.000] 	FileName: /a/file2.js ProjectRootPath: undefined
Info 25   [00:00:51.000] 		Projects: /dev/null/inferredProject1*
Info 25   [00:00:52.000] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/node_modules/@types:
  {"pollingInterval":500} *new*

PolledWatches *deleted*::
/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}

maxNodeModuleJsDepth: 2
Before request

Info 26   [00:00:53.000] request:
    {
      "command": "close",
      "arguments": {
        "file": "/a/file2.js"
      },
      "seq": 3,
      "type": "request"
    }
Info 27   [00:00:54.000] DirectoryWatcher:: Close:: WatchInfo: /node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info 28   [00:00:55.000] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info 29   [00:00:56.000] FileWatcher:: Added:: WatchInfo: /a/file2.js 500 undefined WatchType: Closed Script info
Info 30   [00:00:57.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 30   [00:00:58.000] 	Files (3)

Info 30   [00:00:59.000] -----------------------------------------------
Info 30   [00:01:00.000] Open files: 
Info 30   [00:01:01.000] 	FileName: /a/file1.ts ProjectRootPath: undefined
Info 30   [00:01:02.000] 		Projects: /dev/null/inferredProject1*
Info 30   [00:01:03.000] response:
    {
      "responseRequired": false
    }
After request

PolledWatches *deleted*::
/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/a/file2.js: *new*
  {}

maxNodeModuleJsDepth: undefined