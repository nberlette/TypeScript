currentDirectory:: / useCaseSensitiveFileNames: false
Info 0    [00:00:11.000] Provided types map file "/a/lib/typesMap.json" doesn't exist
Before request
//// [/a/app.js]
let x =   1;

//// [/a/largefile.js]


//// [/a/jsconfig.json]
{}


Info 1    [00:00:12.000] request:
    {
      "command": "open",
      "arguments": {
        "file": "/a/app.js"
      },
      "seq": 1,
      "type": "request"
    }
Info 2    [00:00:13.000] Search path: /a
Info 3    [00:00:14.000] For info: /a/app.js :: Config file name: /a/jsconfig.json
Info 4    [00:00:15.000] Creating configuration project /a/jsconfig.json
Info 5    [00:00:16.000] FileWatcher:: Added:: WatchInfo: /a/jsconfig.json 2000 undefined Project: /a/jsconfig.json WatchType: Config file
Info 6    [00:00:17.000] event:
    {"seq":0,"type":"event","event":"projectLoadingStart","body":{"projectName":"/a/jsconfig.json","reason":"Creating possible configured project for /a/app.js to open"}}
Info 7    [00:00:18.000] Config: /a/jsconfig.json : {
 "rootNames": [
  "/a/app.js",
  "/a/largefile.js"
 ],
 "options": {
  "allowJs": true,
  "maxNodeModuleJsDepth": 2,
  "allowSyntheticDefaultImports": true,
  "skipLibCheck": true,
  "noEmit": true,
  "configFilePath": "/a/jsconfig.json"
 }
}
Info 8    [00:00:19.000] Non TS file size exceeded limit (20971533). Largest files: /a/largefile.js:20971521, /a/app.js:12
Info 9    [00:00:20.000] event:
    {"seq":0,"type":"event","event":"projectLanguageServiceState","body":{"projectName":"/a/jsconfig.json","languageServiceEnabled":false}}
Info 10   [00:00:21.000] FileWatcher:: Added:: WatchInfo: /a/largefile.js 500 undefined WatchType: Closed Script info
Info 11   [00:00:22.000] Starting updateGraphWorker: Project: /a/jsconfig.json
Info 12   [00:00:23.000] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined Project: /a/jsconfig.json WatchType: Missing file
Info 13   [00:00:24.000] Finishing updateGraphWorker: Project: /a/jsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 14   [00:00:25.000] Project '/a/jsconfig.json' (Configured)
Info 15   [00:00:26.000] 	Files (1)
	/a/app.js SVC-1-0 "let x =   1;"


	app.js
	  Matched by default include pattern '**/*'

Info 16   [00:00:27.000] -----------------------------------------------
Info 17   [00:00:28.000] event:
    {"seq":0,"type":"event","event":"projectLoadingFinish","body":{"projectName":"/a/jsconfig.json"}}
Info 18   [00:00:29.000] Skipped loading contents of large file /a/largefile.js for info /a/largefile.js: fileSize: 20971521
Info 19   [00:00:30.000] event:
    {"seq":0,"type":"event","event":"largeFileReferenced","body":{"file":"/a/largefile.js","fileSize":20971521,"maxFileSize":4194304}}
Info 20   [00:00:31.000] event:
    {"seq":0,"type":"event","event":"telemetry","body":{"telemetryEventName":"projectInfo","payload":{"projectId":"d0d8dad6731288ecaafd815d288fca9793f4a55553e712b664ec18e525950982","fileStats":{"js":2,"jsSize":12,"jsx":0,"jsxSize":0,"ts":0,"tsSize":0,"tsx":0,"tsxSize":0,"dts":0,"dtsSize":0,"deferred":0,"deferredSize":0},"compilerOptions":{"allowJs":true,"maxNodeModuleJsDepth":2,"allowSyntheticDefaultImports":true,"skipLibCheck":true,"noEmit":true},"typeAcquisition":{"enable":true,"include":false,"exclude":false},"extends":false,"files":false,"include":false,"exclude":false,"compileOnSave":false,"configFileName":"jsconfig.json","projectType":"configured","languageServiceEnabled":false,"version":"FakeVersion"}}}
Info 21   [00:00:32.000] event:
    {"seq":0,"type":"event","event":"configFileDiag","body":{"triggerFile":"/a/app.js","configFile":"/a/jsconfig.json","diagnostics":[{"text":"File '/a/lib/lib.d.ts' not found.\n  The file is in the program because:\n    Default library for target 'es5'","code":6053,"category":"error"},{"text":"Cannot find global type 'Array'.","code":2318,"category":"error"},{"text":"Cannot find global type 'Boolean'.","code":2318,"category":"error"},{"text":"Cannot find global type 'Function'.","code":2318,"category":"error"},{"text":"Cannot find global type 'IArguments'.","code":2318,"category":"error"},{"text":"Cannot find global type 'Number'.","code":2318,"category":"error"},{"text":"Cannot find global type 'Object'.","code":2318,"category":"error"},{"text":"Cannot find global type 'RegExp'.","code":2318,"category":"error"},{"text":"Cannot find global type 'String'.","code":2318,"category":"error"}]}}
Info 22   [00:00:33.000] Project '/a/jsconfig.json' (Configured)
Info 22   [00:00:34.000] 	Files (1)

Info 22   [00:00:35.000] -----------------------------------------------
Info 22   [00:00:36.000] Open files: 
Info 22   [00:00:37.000] 	FileName: /a/app.js ProjectRootPath: undefined
Info 22   [00:00:38.000] 		Projects: /a/jsconfig.json
Info 22   [00:00:39.000] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/a/lib/lib.d.ts: *new*
  {"pollingInterval":500}

FsWatches::
/a/jsconfig.json: *new*
  {}
/a/largefile.js: *new*
  {}

Language languageServiceEnabled:: false
Before request

Info 23   [00:00:40.000] request:
    {
      "command": "format-full",
      "arguments": {
        "file": "/a/app.js"
      },
      "seq": 2,
      "type": "request"
    }
Info 24   [00:00:41.000] response:
    {
      "response": [
        {
          "span": {
            "start": 7,
            "length": 3
          },
          "newText": " "
        }
      ],
      "responseRequired": true
    }
After request
