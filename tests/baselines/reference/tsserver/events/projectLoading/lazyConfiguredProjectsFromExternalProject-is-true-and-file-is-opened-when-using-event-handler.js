currentDirectory:: / useCaseSensitiveFileNames: false
Info 0    [00:00:21.000] Provided types map file "/a/lib/typesMap.json" doesn't exist
Before request
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

//// [/user/username/projects/a/a.ts]
export class A { }

//// [/user/username/projects/a/tsconfig.json]
{}


Info 1    [00:00:22.000] request:
    {
      "command": "configure",
      "arguments": {
        "preferences": {
          "lazyConfiguredProjectsFromExternalProject": true
        }
      },
      "seq": 1,
      "type": "request"
    }
Info 2    [00:00:23.000] response:
    {"seq":0,"type":"response","command":"configure","request_seq":1,"success":true}
Info 3    [00:00:24.000] response:
    {
      "responseRequired": false
    }
After request

Before request

Info 4    [00:00:25.000] request:
    {
      "command": "openExternalProject",
      "arguments": {
        "projectFileName": "/user/username/projects/a/project.csproj",
        "rootFiles": [
          {
            "fileName": "/user/username/projects/a/a.ts"
          },
          {
            "fileName": "/user/username/projects/a/tsconfig.json"
          }
        ],
        "options": {}
      },
      "seq": 2,
      "type": "request"
    }
Info 5    [00:00:26.000] Creating configuration project /user/username/projects/a/tsconfig.json
Info 6    [00:00:27.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/a/tsconfig.json 2000 undefined Project: /user/username/projects/a/tsconfig.json WatchType: Config file
Info 7    [00:00:28.000] response:
    {
      "response": true,
      "responseRequired": true
    }
After request

FsWatches::
/user/username/projects/a/tsconfig.json: *new*
  {}

Before request

Info 8    [00:00:29.000] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/a/a.ts"
      },
      "seq": 3,
      "type": "request"
    }
Info 9    [00:00:30.000] Search path: /user/username/projects/a
Info 10   [00:00:31.000] For info: /user/username/projects/a/a.ts :: Config file name: /user/username/projects/a/tsconfig.json
Info 11   [00:00:32.000] Loading configured project /user/username/projects/a/tsconfig.json
Info 12   [00:00:33.000] event:
    {"seq":0,"type":"event","event":"CustomHandler::projectLoadingStart","body":{"project":"/user/username/projects/a/tsconfig.json","reason":"Creating configured project in external project: /user/username/projects/a/project.csproj"}}
Info 13   [00:00:34.000] Config: /user/username/projects/a/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/a/a.ts"
 ],
 "options": {
  "configFilePath": "/user/username/projects/a/tsconfig.json"
 }
}
Info 14   [00:00:35.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/a 1 undefined Config: /user/username/projects/a/tsconfig.json WatchType: Wild card directory
Info 15   [00:00:36.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/a 1 undefined Config: /user/username/projects/a/tsconfig.json WatchType: Wild card directory
Info 16   [00:00:37.000] Starting updateGraphWorker: Project: /user/username/projects/a/tsconfig.json
Info 17   [00:00:38.000] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info 18   [00:00:39.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/a/node_modules/@types 1 undefined Project: /user/username/projects/a/tsconfig.json WatchType: Type roots
Info 19   [00:00:40.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/a/node_modules/@types 1 undefined Project: /user/username/projects/a/tsconfig.json WatchType: Type roots
Info 20   [00:00:41.000] Finishing updateGraphWorker: Project: /user/username/projects/a/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 21   [00:00:42.000] Project '/user/username/projects/a/tsconfig.json' (Configured)
Info 22   [00:00:43.000] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/a/a.ts SVC-1-0 "export class A { }"


	../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	a.ts
	  Matched by default include pattern '**/*'

Info 23   [00:00:44.000] -----------------------------------------------
Info 24   [00:00:45.000] event:
    {"seq":0,"type":"event","event":"CustomHandler::projectLoadingFinish","body":{"project":"/user/username/projects/a/tsconfig.json"}}
Info 25   [00:00:46.000] event:
    {"seq":0,"type":"event","event":"CustomHandler::projectInfo","body":{"projectId":"20a91f8dffe761e39e0ada0a62a3058faad15d4a8c135539aaccd61bb5497dea","fileStats":{"js":0,"jsSize":0,"jsx":0,"jsxSize":0,"ts":1,"tsSize":18,"tsx":0,"tsxSize":0,"dts":1,"dtsSize":334,"deferred":0,"deferredSize":0},"compilerOptions":{},"typeAcquisition":{"enable":false,"include":false,"exclude":false},"extends":false,"files":false,"include":false,"exclude":false,"compileOnSave":false,"configFileName":"tsconfig.json","projectType":"configured","languageServiceEnabled":true,"version":"FakeVersion"}}
Info 26   [00:00:47.000] event:
    {"seq":0,"type":"event","event":"CustomHandler::configFileDiag","body":{"configFileName":"/user/username/projects/a/tsconfig.json","diagnostics":[],"triggerFile":"/user/username/projects/a/tsconfig.json"}}
Info 27   [00:00:48.000] Project '/user/username/projects/a/tsconfig.json' (Configured)
Info 27   [00:00:49.000] 	Files (2)

Info 27   [00:00:50.000] -----------------------------------------------
Info 27   [00:00:51.000] Open files: 
Info 27   [00:00:52.000] 	FileName: /user/username/projects/a/a.ts ProjectRootPath: undefined
Info 27   [00:00:53.000] 		Projects: /user/username/projects/a/tsconfig.json
Info 27   [00:00:54.000] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/a/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/user/username/projects/a/tsconfig.json:
  {}
/a/lib/lib.d.ts: *new*
  {}

FsWatchesRecursive::
/user/username/projects/a: *new*
  {}
