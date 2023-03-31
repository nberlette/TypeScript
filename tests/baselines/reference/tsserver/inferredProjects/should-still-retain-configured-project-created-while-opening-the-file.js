currentDirectory:: / useCaseSensitiveFileNames: false
Info 0    [00:00:25.000] Provided types map file "/a/lib/typesMap.json" doesn't exist
Before request
//// [/user/username/projects/myproject/app.ts]
const app = 20;

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

//// [/user/username/projects/myproject/tsconfig.json]
{}

//// [/user/username/projects/myproject/jsFile1.js]
const jsFile1 = 10;

//// [/user/username/projects/myproject/jsFile2.js]
const jsFile2 = 10;


Info 1    [00:00:26.000] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/myproject/jsFile1.js"
      },
      "seq": 1,
      "type": "request"
    }
Info 2    [00:00:27.000] Search path: /user/username/projects/myproject
Info 3    [00:00:28.000] For info: /user/username/projects/myproject/jsFile1.js :: Config file name: /user/username/projects/myproject/tsconfig.json
Info 4    [00:00:29.000] Creating configuration project /user/username/projects/myproject/tsconfig.json
Info 5    [00:00:30.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Config file
Info 6    [00:00:31.000] Config: /user/username/projects/myproject/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/app.ts"
 ],
 "options": {
  "configFilePath": "/user/username/projects/myproject/tsconfig.json"
 }
}
Info 7    [00:00:32.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject 1 undefined Config: /user/username/projects/myproject/tsconfig.json WatchType: Wild card directory
Info 8    [00:00:33.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject 1 undefined Config: /user/username/projects/myproject/tsconfig.json WatchType: Wild card directory
Info 9    [00:00:34.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/app.ts 500 undefined WatchType: Closed Script info
Info 10   [00:00:35.000] Starting updateGraphWorker: Project: /user/username/projects/myproject/tsconfig.json
Info 11   [00:00:36.000] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info 12   [00:00:37.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Type roots
Info 13   [00:00:38.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Type roots
Info 14   [00:00:39.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Type roots
Info 15   [00:00:40.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Type roots
Info 16   [00:00:41.000] Finishing updateGraphWorker: Project: /user/username/projects/myproject/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 17   [00:00:42.000] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info 18   [00:00:43.000] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/app.ts Text-1 "const app = 20;"


	../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	app.ts
	  Matched by default include pattern '**/*'

Info 19   [00:00:44.000] -----------------------------------------------
Info 20   [00:00:45.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/jsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info 21   [00:00:46.000] Starting updateGraphWorker: Project: /dev/null/inferredProject1*
Info 22   [00:00:47.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info 23   [00:00:48.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info 24   [00:00:49.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info 25   [00:00:50.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info 26   [00:00:51.000] Finishing updateGraphWorker: Project: /dev/null/inferredProject1* Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 27   [00:00:52.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 28   [00:00:53.000] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/jsFile1.js SVC-1-0 "const jsFile1 = 10;"


	../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	jsFile1.js
	  Root file specified for compilation

Info 29   [00:00:54.000] -----------------------------------------------
TI:: Creating typing installer

PolledWatches::
/user/username/projects/myproject/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/jsconfig.json: *new*
  {"pollingInterval":2000}

FsWatches::
/user/username/projects/myproject/tsconfig.json: *new*
  {}
/user/username/projects/myproject/app.ts: *new*
  {}
/a/lib/lib.d.ts: *new*
  {}

FsWatchesRecursive::
/user/username/projects/myproject: *new*
  {}

TI:: [00:00:55.000] Global cache location '/a/data/', safe file path '/safeList.json', types map path /typesMap.json
TI:: [00:00:56.000] Processing cache location '/a/data/'
TI:: [00:00:57.000] Trying to find '/a/data/package.json'...
TI:: [00:00:58.000] Finished processing cache location '/a/data/'
TI:: [00:00:59.000] Npm config file: /a/data/package.json
TI:: [00:01:00.000] Npm config file: '/a/data/package.json' is missing, creating new one...
TI:: [00:01:05.000] Updating types-registry npm package...
TI:: [00:01:06.000] npm install --ignore-scripts types-registry@latest
TI:: [00:01:13.000] TI:: Updated types-registry npm package
TI:: typing installer creation complete
//// [/a/data/package.json]
{ "private": true }

//// [/a/data/node_modules/types-registry/index.json]
{
 "entries": {}
}


TI:: [00:01:14.000] Got install request {"projectName":"/dev/null/inferredProject1*","fileNames":["/a/lib/lib.d.ts","/user/username/projects/myproject/jsFile1.js"],"compilerOptions":{"target":1,"jsx":1,"allowNonTsExtensions":true,"allowJs":true,"noEmitForJsFiles":true,"maxNodeModuleJsDepth":2},"typeAcquisition":{"enable":true,"include":[],"exclude":[]},"unresolvedImports":[],"projectRootPath":"/user/username/projects/myproject","cachePath":"/a/data/","kind":"discover"}
TI:: [00:01:15.000] Request specifies cache path '/a/data/', loading cached information...
TI:: [00:01:16.000] Processing cache location '/a/data/'
TI:: [00:01:17.000] Cache location was already processed...
TI:: [00:01:18.000] Failed to load safelist from types map file '/typesMap.json'
TI:: [00:01:19.000] Explicitly included types: []
TI:: [00:01:20.000] Inferred typings from unresolved imports: []
TI:: [00:01:21.000] Result: {"cachedTypingPaths":[],"newTypingNames":[],"filesToWatch":["/user/username/projects/myproject/bower_components","/user/username/projects/myproject/node_modules"]}
TI:: [00:01:22.000] Finished typings discovery: {"cachedTypingPaths":[],"newTypingNames":[],"filesToWatch":["/user/username/projects/myproject/bower_components","/user/username/projects/myproject/node_modules"]}
TI:: [00:01:23.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/bower_components
TI:: [00:01:24.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/bower_components 1 undefined Project: /dev/null/inferredProject1* watcher already invoked: false
TI:: [00:01:25.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/bower_components 1 undefined Project: /dev/null/inferredProject1* watcher already invoked: false
TI:: [00:01:26.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules
TI:: [00:01:27.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules 1 undefined Project: /dev/null/inferredProject1* watcher already invoked: false
TI:: [00:01:28.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules 1 undefined Project: /dev/null/inferredProject1* watcher already invoked: false
TI:: [00:01:29.000] Sending response:
    {"projectName":"/dev/null/inferredProject1*","typeAcquisition":{"enable":true,"include":[],"exclude":[]},"compilerOptions":{"target":1,"jsx":1,"allowNonTsExtensions":true,"allowJs":true,"noEmitForJsFiles":true,"maxNodeModuleJsDepth":2},"typings":[],"unresolvedImports":[],"kind":"action::set"}
TI:: [00:01:30.000] No new typings were requested as a result of typings discovery
Info 30   [00:01:31.000] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info 30   [00:01:32.000] 	Files (2)

Info 30   [00:01:33.000] -----------------------------------------------
Info 30   [00:01:34.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 30   [00:01:35.000] 	Files (2)

Info 30   [00:01:36.000] -----------------------------------------------
Info 30   [00:01:37.000] Open files: 
Info 30   [00:01:38.000] 	FileName: /user/username/projects/myproject/jsFile1.js ProjectRootPath: undefined
Info 30   [00:01:39.000] 		Projects: /dev/null/inferredProject1*
Info 30   [00:01:40.000] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/jsconfig.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/bower_components: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules: *new*
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}
/user/username/projects/myproject/app.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/myproject:
  {}

Before request

Info 31   [00:01:41.000] request:
    {
      "command": "close",
      "arguments": {
        "file": "/user/username/projects/myproject/jsFile1.js"
      },
      "seq": 2,
      "type": "request"
    }
Info 32   [00:01:42.000] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/jsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info 33   [00:01:43.000] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info 34   [00:01:44.000] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info 35   [00:01:45.000] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info 36   [00:01:46.000] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info 37   [00:01:47.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/jsFile1.js 500 undefined WatchType: Closed Script info
Info 38   [00:01:48.000] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info 38   [00:01:49.000] 	Files (2)

Info 38   [00:01:50.000] -----------------------------------------------
Info 38   [00:01:51.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 38   [00:01:52.000] 	Files (2)

Info 38   [00:01:53.000] -----------------------------------------------
Info 38   [00:01:54.000] Open files: 
Info 38   [00:01:55.000] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/bower_components:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules:
  {"pollingInterval":500}

PolledWatches *deleted*::
/user/username/projects/myproject/jsconfig.json:
  {"pollingInterval":2000}

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}
/user/username/projects/myproject/app.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/jsfile1.js: *new*
  {}

FsWatchesRecursive::
/user/username/projects/myproject:
  {}

Before request

Info 39   [00:01:56.000] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/myproject/jsFile2.js"
      },
      "seq": 3,
      "type": "request"
    }
Info 40   [00:01:57.000] Search path: /user/username/projects/myproject
Info 41   [00:01:58.000] For info: /user/username/projects/myproject/jsFile2.js :: Config file name: /user/username/projects/myproject/tsconfig.json
Info 42   [00:01:59.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/jsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info 43   [00:02:00.000] Starting updateGraphWorker: Project: /dev/null/inferredProject1*
Info 44   [00:02:01.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info 45   [00:02:02.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info 46   [00:02:03.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info 47   [00:02:04.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info 48   [00:02:05.000] Finishing updateGraphWorker: Project: /dev/null/inferredProject1* Version: 2 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 49   [00:02:06.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 50   [00:02:07.000] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/jsFile2.js SVC-1-0 "const jsFile2 = 10;"


	../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	jsFile2.js
	  Root file specified for compilation

Info 51   [00:02:08.000] -----------------------------------------------
TI:: [00:02:09.000] Got install request {"projectName":"/dev/null/inferredProject1*","fileNames":["/a/lib/lib.d.ts","/user/username/projects/myproject/jsFile2.js"],"compilerOptions":{"target":1,"jsx":1,"allowNonTsExtensions":true,"allowJs":true,"noEmitForJsFiles":true,"maxNodeModuleJsDepth":2},"typeAcquisition":{"enable":true,"include":[],"exclude":[]},"unresolvedImports":[],"projectRootPath":"/user/username/projects/myproject","cachePath":"/a/data/","kind":"discover"}
TI:: [00:02:10.000] Request specifies cache path '/a/data/', loading cached information...
TI:: [00:02:11.000] Processing cache location '/a/data/'
TI:: [00:02:12.000] Cache location was already processed...
TI:: [00:02:13.000] Explicitly included types: []
TI:: [00:02:14.000] Inferred typings from unresolved imports: []
TI:: [00:02:15.000] Result: {"cachedTypingPaths":[],"newTypingNames":[],"filesToWatch":["/user/username/projects/myproject/bower_components","/user/username/projects/myproject/node_modules"]}
TI:: [00:02:16.000] Finished typings discovery: {"cachedTypingPaths":[],"newTypingNames":[],"filesToWatch":["/user/username/projects/myproject/bower_components","/user/username/projects/myproject/node_modules"]}
TI:: [00:02:17.000] Sending response:
    {"projectName":"/dev/null/inferredProject1*","typeAcquisition":{"enable":true,"include":[],"exclude":[]},"compilerOptions":{"target":1,"jsx":1,"allowNonTsExtensions":true,"allowJs":true,"noEmitForJsFiles":true,"maxNodeModuleJsDepth":2},"typings":[],"unresolvedImports":[],"kind":"action::set"}
TI:: [00:02:18.000] No new typings were requested as a result of typings discovery
Info 52   [00:02:19.000] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/jsFile1.js 500 undefined WatchType: Closed Script info
Info 53   [00:02:20.000] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info 53   [00:02:21.000] 	Files (2)

Info 53   [00:02:22.000] -----------------------------------------------
Info 53   [00:02:23.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 53   [00:02:24.000] 	Files (2)

Info 53   [00:02:25.000] -----------------------------------------------
Info 53   [00:02:26.000] Open files: 
Info 53   [00:02:27.000] 	FileName: /user/username/projects/myproject/jsFile2.js ProjectRootPath: undefined
Info 53   [00:02:28.000] 		Projects: /dev/null/inferredProject1*
Info 53   [00:02:29.000] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/bower_components:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules:
  {"pollingInterval":500}
/user/username/projects/myproject/jsconfig.json: *new*
  {"pollingInterval":2000}

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}
/user/username/projects/myproject/app.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatches *deleted*::
/user/username/projects/myproject/jsfile1.js:
  {}

FsWatchesRecursive::
/user/username/projects/myproject:
  {}

Before request

Info 54   [00:02:30.000] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/myproject/jsFile1.js"
      },
      "seq": 4,
      "type": "request"
    }
Info 55   [00:02:31.000] Search path: /user/username/projects/myproject
Info 56   [00:02:32.000] For info: /user/username/projects/myproject/jsFile1.js :: Config file name: /user/username/projects/myproject/tsconfig.json
Info 57   [00:02:33.000] Starting updateGraphWorker: Project: /dev/null/inferredProject2*
Info 58   [00:02:34.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /dev/null/inferredProject2* WatchType: Type roots
Info 59   [00:02:35.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /dev/null/inferredProject2* WatchType: Type roots
Info 60   [00:02:36.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /dev/null/inferredProject2* WatchType: Type roots
Info 61   [00:02:37.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /dev/null/inferredProject2* WatchType: Type roots
Info 62   [00:02:38.000] Finishing updateGraphWorker: Project: /dev/null/inferredProject2* Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 63   [00:02:39.000] Project '/dev/null/inferredProject2*' (Inferred)
Info 64   [00:02:40.000] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/jsFile1.js SVC-2-0 "const jsFile1 = 10;"


	../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	jsFile1.js
	  Root file specified for compilation

Info 65   [00:02:41.000] -----------------------------------------------
TI:: [00:02:42.000] Got install request {"projectName":"/dev/null/inferredProject2*","fileNames":["/a/lib/lib.d.ts","/user/username/projects/myproject/jsFile1.js"],"compilerOptions":{"target":1,"jsx":1,"allowNonTsExtensions":true,"allowJs":true,"noEmitForJsFiles":true,"maxNodeModuleJsDepth":2},"typeAcquisition":{"enable":true,"include":[],"exclude":[]},"unresolvedImports":[],"projectRootPath":"/user/username/projects/myproject","cachePath":"/a/data/","kind":"discover"}
TI:: [00:02:43.000] Request specifies cache path '/a/data/', loading cached information...
TI:: [00:02:44.000] Processing cache location '/a/data/'
TI:: [00:02:45.000] Cache location was already processed...
TI:: [00:02:46.000] Explicitly included types: []
TI:: [00:02:47.000] Inferred typings from unresolved imports: []
TI:: [00:02:48.000] Result: {"cachedTypingPaths":[],"newTypingNames":[],"filesToWatch":["/user/username/projects/myproject/bower_components","/user/username/projects/myproject/node_modules"]}
TI:: [00:02:49.000] Finished typings discovery: {"cachedTypingPaths":[],"newTypingNames":[],"filesToWatch":["/user/username/projects/myproject/bower_components","/user/username/projects/myproject/node_modules"]}
TI:: [00:02:50.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/bower_components
TI:: [00:02:51.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/bower_components 1 undefined Project: /dev/null/inferredProject2* watcher already invoked: false
TI:: [00:02:52.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/bower_components 1 undefined Project: /dev/null/inferredProject2* watcher already invoked: false
TI:: [00:02:53.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules
TI:: [00:02:54.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules 1 undefined Project: /dev/null/inferredProject2* watcher already invoked: false
TI:: [00:02:55.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules 1 undefined Project: /dev/null/inferredProject2* watcher already invoked: false
TI:: [00:02:56.000] Sending response:
    {"projectName":"/dev/null/inferredProject2*","typeAcquisition":{"enable":true,"include":[],"exclude":[]},"compilerOptions":{"target":1,"jsx":1,"allowNonTsExtensions":true,"allowJs":true,"noEmitForJsFiles":true,"maxNodeModuleJsDepth":2},"typings":[],"unresolvedImports":[],"kind":"action::set"}
TI:: [00:02:57.000] No new typings were requested as a result of typings discovery
Info 66   [00:02:58.000] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info 66   [00:02:59.000] 	Files (2)

Info 66   [00:03:00.000] -----------------------------------------------
Info 66   [00:03:01.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 66   [00:03:02.000] 	Files (2)

Info 66   [00:03:03.000] -----------------------------------------------
Info 66   [00:03:04.000] Project '/dev/null/inferredProject2*' (Inferred)
Info 66   [00:03:05.000] 	Files (2)

Info 66   [00:03:06.000] -----------------------------------------------
Info 66   [00:03:07.000] Open files: 
Info 66   [00:03:08.000] 	FileName: /user/username/projects/myproject/jsFile2.js ProjectRootPath: undefined
Info 66   [00:03:09.000] 		Projects: /dev/null/inferredProject1*
Info 66   [00:03:10.000] 	FileName: /user/username/projects/myproject/jsFile1.js ProjectRootPath: undefined
Info 66   [00:03:11.000] 		Projects: /dev/null/inferredProject2*
Info 66   [00:03:12.000] response:
    {
      "responseRequired": false
    }
After request

Before request

Info 67   [00:03:13.000] request:
    {
      "command": "open",
      "arguments": {
        "file": "/a/lib/lib.d.ts"
      },
      "seq": 5,
      "type": "request"
    }
Info 68   [00:03:14.000] FileWatcher:: Close:: WatchInfo: /a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info 69   [00:03:15.000] Search path: /a/lib
Info 70   [00:03:16.000] For info: /a/lib/lib.d.ts :: No config files found.
Info 71   [00:03:17.000] `remove Project::
Info 72   [00:03:18.000] Project '/user/username/projects/myproject/tsconfig.json' (Configured)
Info 73   [00:03:19.000] 	Files (2)
	/a/lib/lib.d.ts
	/user/username/projects/myproject/app.ts


	../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	app.ts
	  Matched by default include pattern '**/*'

Info 74   [00:03:20.000] -----------------------------------------------
Info 75   [00:03:21.000] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject 1 undefined Config: /user/username/projects/myproject/tsconfig.json WatchType: Wild card directory
Info 76   [00:03:22.000] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject 1 undefined Config: /user/username/projects/myproject/tsconfig.json WatchType: Wild card directory
Info 77   [00:03:23.000] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Type roots
Info 78   [00:03:24.000] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Type roots
Info 79   [00:03:25.000] DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Type roots
Info 80   [00:03:26.000] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/tsconfig.json WatchType: Type roots
Info 81   [00:03:27.000] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/app.ts 500 undefined WatchType: Closed Script info
Info 82   [00:03:28.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 82   [00:03:29.000] 	Files (2)

Info 82   [00:03:30.000] -----------------------------------------------
Info 82   [00:03:31.000] Project '/dev/null/inferredProject2*' (Inferred)
Info 82   [00:03:32.000] 	Files (2)

Info 82   [00:03:33.000] -----------------------------------------------
Info 82   [00:03:34.000] Open files: 
Info 82   [00:03:35.000] 	FileName: /user/username/projects/myproject/jsFile2.js ProjectRootPath: undefined
Info 82   [00:03:36.000] 		Projects: /dev/null/inferredProject1*
Info 82   [00:03:37.000] 	FileName: /user/username/projects/myproject/jsFile1.js ProjectRootPath: undefined
Info 82   [00:03:38.000] 		Projects: /dev/null/inferredProject2*
Info 82   [00:03:39.000] 	FileName: /a/lib/lib.d.ts ProjectRootPath: undefined
Info 82   [00:03:40.000] 		Projects: /dev/null/inferredProject2*,/dev/null/inferredProject1*
Info 82   [00:03:41.000] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/bower_components:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules:
  {"pollingInterval":500}
/user/username/projects/myproject/jsconfig.json:
  {"pollingInterval":2000}

FsWatches::
/user/username/projects/myproject/tsconfig.json:
  {}

FsWatches *deleted*::
/user/username/projects/myproject/app.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive *deleted*::
/user/username/projects/myproject:
  {}
