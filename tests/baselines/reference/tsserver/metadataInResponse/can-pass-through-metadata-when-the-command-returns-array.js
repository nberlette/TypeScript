currentDirectory:: / useCaseSensitiveFileNames: false
Info 0    [00:00:07.000] Provided types map file "/a/lib/typesMap.json" doesn't exist
Before request
//// [/a.ts]
class c { prop = "hello"; foo() { return this.prop; } }

//// [/tsconfig.json]
{"compilerOptions":{"plugins":[{"name":"myplugin"}]}}


Info 1    [00:00:08.000] request:
    {
      "command": "open",
      "arguments": {
        "file": "/a.ts"
      },
      "seq": 1,
      "type": "request"
    }
Info 2    [00:00:09.000] Search path: /
Info 3    [00:00:10.000] For info: /a.ts :: Config file name: /tsconfig.json
Info 4    [00:00:11.000] Creating configuration project /tsconfig.json
Info 5    [00:00:12.000] FileWatcher:: Added:: WatchInfo: /tsconfig.json 2000 undefined Project: /tsconfig.json WatchType: Config file
Info 6    [00:00:13.000] Config: /tsconfig.json : {
 "rootNames": [
  "/a.ts"
 ],
 "options": {
  "plugins": [
   {
    "name": "myplugin"
   }
  ],
  "configFilePath": "/tsconfig.json"
 }
}
Info 7    [00:00:14.000] DirectoryWatcher:: Added:: WatchInfo:  1 undefined Config: /tsconfig.json WatchType: Wild card directory
Info 8    [00:00:15.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo:  1 undefined Config: /tsconfig.json WatchType: Wild card directory
Info 9    [00:00:16.000] Enabling plugin myplugin from candidate paths: /a/lib/tsc.js/../../..
Info 10   [00:00:17.000] Loading myplugin from /a/lib/tsc.js/../../.. (resolved to /a/lib/tsc.js/../../../node_modules)
Info 11   [00:00:18.000] Plugin validation succeeded
Info 12   [00:00:19.000] Starting updateGraphWorker: Project: /tsconfig.json
Info 13   [00:00:20.000] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined Project: /tsconfig.json WatchType: Missing file
Info 14   [00:00:21.000] DirectoryWatcher:: Added:: WatchInfo: /node_modules/@types 1 undefined Project: /tsconfig.json WatchType: Type roots
Info 15   [00:00:22.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /node_modules/@types 1 undefined Project: /tsconfig.json WatchType: Type roots
Info 16   [00:00:23.000] Finishing updateGraphWorker: Project: /tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 17   [00:00:24.000] Project '/tsconfig.json' (Configured)
Info 18   [00:00:25.000] 	Files (1)
	/a.ts SVC-1-0 "class c { prop = \"hello\"; foo() { return this.prop; } }"


	a.ts
	  Matched by default include pattern '**/*'

Info 19   [00:00:26.000] -----------------------------------------------
Info 20   [00:00:27.000] Project '/tsconfig.json' (Configured)
Info 20   [00:00:28.000] 	Files (1)

Info 20   [00:00:29.000] -----------------------------------------------
Info 20   [00:00:30.000] Open files: 
Info 20   [00:00:31.000] 	FileName: /a.ts ProjectRootPath: undefined
Info 20   [00:00:32.000] 		Projects: /tsconfig.json
Info 20   [00:00:33.000] response:
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
/tsconfig.json: *new*
  {}

FsWatchesRecursive::
/: *new*
  {}

Before request

Info 21   [00:00:34.000] request:
    {
      "command": "completions",
      "arguments": {
        "file": "/a.ts",
        "line": 1,
        "offset": 47
      },
      "seq": 2,
      "type": "request"
    }
Info 22   [00:00:35.000] getCompletionData: Get current token: *
Info 23   [00:00:36.000] getCompletionData: Is inside comment: *
Info 24   [00:00:37.000] getCompletionData: Get previous token: *
Info 25   [00:00:38.000] getCompletionsAtPosition: isCompletionListBlocker: *
Info 26   [00:00:39.000] getCompletionData: Semantic work: *
Info 27   [00:00:40.000] getCompletionsAtPosition: getCompletionEntriesFromSymbols: *
Info 28   [00:00:41.000] response:
    {
      "response": [
        {
          "name": "foo",
          "kind": "method",
          "kindModifiers": "",
          "sortText": "11"
        },
        {
          "name": "prop",
          "kind": "property",
          "kindModifiers": "",
          "sortText": "11"
        }
      ],
      "responseRequired": true
    }
After request
