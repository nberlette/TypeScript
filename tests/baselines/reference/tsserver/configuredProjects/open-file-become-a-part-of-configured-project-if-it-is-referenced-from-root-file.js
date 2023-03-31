currentDirectory:: / useCaseSensitiveFileNames: false
Info 0    [00:00:23.000] Provided types map file "/typesMap.json" doesn't exist
Creating project service
//// [/user/username/projects/myproject/a/b/f1.ts]
export let x = 5

//// [/user/username/projects/myproject/a/c/f2.ts]
import {x} from "../b/f1"

//// [/user/username/projects/myproject/a/c/f3.ts]
export let y = 1


Info 1    [00:00:24.000] Search path: /user/username/projects/myproject/a/b
Info 2    [00:00:25.000] For info: /user/username/projects/myproject/a/b/f1.ts :: No config files found.
Info 3    [00:00:26.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/a/b/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info 4    [00:00:27.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/a/b/jsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info 5    [00:00:28.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/a/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info 6    [00:00:29.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/a/jsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info 7    [00:00:30.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info 8    [00:00:31.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/jsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info 9    [00:00:32.000] Starting updateGraphWorker: Project: /dev/null/inferredProject1*
Info 10   [00:00:33.000] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined Project: /dev/null/inferredProject1* WatchType: Missing file
Info 11   [00:00:34.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/a/b/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info 12   [00:00:35.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/a/b/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info 13   [00:00:36.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/a/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info 14   [00:00:37.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/a/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info 15   [00:00:38.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info 16   [00:00:39.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info 17   [00:00:40.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info 18   [00:00:41.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info 19   [00:00:42.000] Finishing updateGraphWorker: Project: /dev/null/inferredProject1* Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 20   [00:00:43.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 21   [00:00:44.000] 	Files (1)
	/user/username/projects/myproject/a/b/f1.ts SVC-1-0 "export let x = 5"


	f1.ts
	  Root file specified for compilation

Info 22   [00:00:45.000] -----------------------------------------------
Info 23   [00:00:46.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 23   [00:00:47.000] 	Files (1)

Info 23   [00:00:48.000] -----------------------------------------------
Info 23   [00:00:49.000] Open files: 
Info 23   [00:00:50.000] 	FileName: /user/username/projects/myproject/a/b/f1.ts ProjectRootPath: undefined
Info 23   [00:00:51.000] 		Projects: /dev/null/inferredProject1*
Info 23   [00:00:52.000] Search path: /user/username/projects/myproject/a/c
Info 24   [00:00:53.000] For info: /user/username/projects/myproject/a/c/f3.ts :: No config files found.
Info 25   [00:00:54.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/a/c/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info 26   [00:00:55.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/a/c/jsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info 27   [00:00:56.000] Starting updateGraphWorker: Project: /dev/null/inferredProject2*
Info 28   [00:00:57.000] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined Project: /dev/null/inferredProject2* WatchType: Missing file
Info 29   [00:00:58.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/a/c/node_modules/@types 1 undefined Project: /dev/null/inferredProject2* WatchType: Type roots
Info 30   [00:00:59.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/a/c/node_modules/@types 1 undefined Project: /dev/null/inferredProject2* WatchType: Type roots
Info 31   [00:01:00.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/a/node_modules/@types 1 undefined Project: /dev/null/inferredProject2* WatchType: Type roots
Info 32   [00:01:01.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/a/node_modules/@types 1 undefined Project: /dev/null/inferredProject2* WatchType: Type roots
Info 33   [00:01:02.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /dev/null/inferredProject2* WatchType: Type roots
Info 34   [00:01:03.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /dev/null/inferredProject2* WatchType: Type roots
Info 35   [00:01:04.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /dev/null/inferredProject2* WatchType: Type roots
Info 36   [00:01:05.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /dev/null/inferredProject2* WatchType: Type roots
Info 37   [00:01:06.000] Finishing updateGraphWorker: Project: /dev/null/inferredProject2* Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 38   [00:01:07.000] Project '/dev/null/inferredProject2*' (Inferred)
Info 39   [00:01:08.000] 	Files (1)
	/user/username/projects/myproject/a/c/f3.ts SVC-1-0 "export let y = 1"


	f3.ts
	  Root file specified for compilation

Info 40   [00:01:09.000] -----------------------------------------------
Info 41   [00:01:10.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 41   [00:01:11.000] 	Files (1)

Info 41   [00:01:12.000] -----------------------------------------------
Info 41   [00:01:13.000] Project '/dev/null/inferredProject2*' (Inferred)
Info 41   [00:01:14.000] 	Files (1)

Info 41   [00:01:15.000] -----------------------------------------------
Info 41   [00:01:16.000] Open files: 
Info 41   [00:01:17.000] 	FileName: /user/username/projects/myproject/a/b/f1.ts ProjectRootPath: undefined
Info 41   [00:01:18.000] 		Projects: /dev/null/inferredProject1*
Info 41   [00:01:19.000] 	FileName: /user/username/projects/myproject/a/c/f3.ts ProjectRootPath: undefined
Info 41   [00:01:20.000] 		Projects: /dev/null/inferredProject2*
Info 41   [00:01:23.000] FileWatcher:: Triggered with /user/username/projects/myproject/a/c/tsconfig.json 0:: WatchInfo: /user/username/projects/myproject/a/c/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info 42   [00:01:24.000] Search path: /user/username/projects/myproject/a/c
Info 43   [00:01:25.000] For info: /user/username/projects/myproject/a/c/f3.ts :: Config file name: /user/username/projects/myproject/a/c/tsconfig.json
Info 44   [00:01:26.000] Creating configuration project /user/username/projects/myproject/a/c/tsconfig.json
Info 45   [00:01:27.000] Scheduled: /user/username/projects/myproject/a/c/tsconfig.json
Info 46   [00:01:28.000] Scheduled: *ensureProjectForOpenFiles*
Info 47   [00:01:29.000] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/a/c/tsconfig.json 0:: WatchInfo: /user/username/projects/myproject/a/c/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info 48   [00:01:30.000] FileWatcher:: Triggered with /user/username/projects/myproject/a/c/tsconfig.json 0:: WatchInfo: /user/username/projects/myproject/a/c/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info 49   [00:01:31.000] Search path: /user/username/projects/myproject/a/c
Info 50   [00:01:32.000] For info: /user/username/projects/myproject/a/c/f3.ts :: Config file name: /user/username/projects/myproject/a/c/tsconfig.json
Info 51   [00:01:33.000] Scheduled: /user/username/projects/myproject/a/c/tsconfig.json, Cancelled earlier one
Info 52   [00:01:34.000] Scheduled: *ensureProjectForOpenFiles*, Cancelled earlier one
Info 53   [00:01:35.000] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/a/c/tsconfig.json 0:: WatchInfo: /user/username/projects/myproject/a/c/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Before running Timeout callback:: count: 2
3: /user/username/projects/myproject/a/c/tsconfig.json
4: *ensureProjectForOpenFiles*
//// [/user/username/projects/myproject/a/c/tsconfig.json]
{"compilerOptions":{},"files":["f2.ts","f3.ts"]}


PolledWatches::
/user/username/projects/myproject/a/b/tsconfig.json: *new*
  {"pollingInterval":2000}
/user/username/projects/myproject/a/b/jsconfig.json: *new*
  {"pollingInterval":2000}
/user/username/projects/myproject/a/tsconfig.json: *new*
  {"pollingInterval":2000}
/user/username/projects/myproject/a/jsconfig.json: *new*
  {"pollingInterval":2000}
/user/username/projects/myproject/tsconfig.json: *new*
  {"pollingInterval":2000}
/user/username/projects/myproject/jsconfig.json: *new*
  {"pollingInterval":2000}
/a/lib/lib.d.ts: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/a/b/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/a/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/a/c/jsconfig.json: *new*
  {"pollingInterval":2000}
/user/username/projects/myproject/a/c/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/a/c/tsconfig.json: *new*
  {}

Info 54   [00:01:36.000] Running: /user/username/projects/myproject/a/c/tsconfig.json
Info 55   [00:01:37.000] Loading configured project /user/username/projects/myproject/a/c/tsconfig.json
Info 56   [00:01:38.000] Config: /user/username/projects/myproject/a/c/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/a/c/f2.ts",
  "/user/username/projects/myproject/a/c/f3.ts"
 ],
 "options": {
  "configFilePath": "/user/username/projects/myproject/a/c/tsconfig.json"
 }
}
Info 57   [00:01:39.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/a/c/f2.ts 500 undefined WatchType: Closed Script info
Info 58   [00:01:40.000] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/a/c/jsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info 59   [00:01:41.000] Starting updateGraphWorker: Project: /user/username/projects/myproject/a/c/tsconfig.json
Info 60   [00:01:42.000] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined Project: /user/username/projects/myproject/a/c/tsconfig.json WatchType: Missing file
Info 61   [00:01:43.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/a/c/node_modules/@types 1 undefined Project: /user/username/projects/myproject/a/c/tsconfig.json WatchType: Type roots
Info 62   [00:01:44.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/a/c/node_modules/@types 1 undefined Project: /user/username/projects/myproject/a/c/tsconfig.json WatchType: Type roots
Info 63   [00:01:45.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/a/node_modules/@types 1 undefined Project: /user/username/projects/myproject/a/c/tsconfig.json WatchType: Type roots
Info 64   [00:01:46.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/a/node_modules/@types 1 undefined Project: /user/username/projects/myproject/a/c/tsconfig.json WatchType: Type roots
Info 65   [00:01:47.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/a/c/tsconfig.json WatchType: Type roots
Info 66   [00:01:48.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/a/c/tsconfig.json WatchType: Type roots
Info 67   [00:01:49.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/a/c/tsconfig.json WatchType: Type roots
Info 68   [00:01:50.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/myproject/a/c/tsconfig.json WatchType: Type roots
Info 69   [00:01:51.000] Finishing updateGraphWorker: Project: /user/username/projects/myproject/a/c/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 70   [00:01:52.000] Project '/user/username/projects/myproject/a/c/tsconfig.json' (Configured)
Info 71   [00:01:53.000] 	Files (3)
	/user/username/projects/myproject/a/b/f1.ts SVC-1-0 "export let x = 5"
	/user/username/projects/myproject/a/c/f2.ts Text-1 "import {x} from \"../b/f1\""
	/user/username/projects/myproject/a/c/f3.ts SVC-1-0 "export let y = 1"


	../b/f1.ts
	  Imported via "../b/f1" from file 'f2.ts'
	f2.ts
	  Part of 'files' list in tsconfig.json
	f3.ts
	  Part of 'files' list in tsconfig.json

Info 72   [00:01:54.000] -----------------------------------------------
Info 73   [00:01:55.000] Running: *ensureProjectForOpenFiles*
Info 74   [00:01:56.000] Before ensureProjectForOpenFiles:
Info 75   [00:01:57.000] Project '/user/username/projects/myproject/a/c/tsconfig.json' (Configured)
Info 75   [00:01:58.000] 	Files (3)

Info 75   [00:01:59.000] -----------------------------------------------
Info 75   [00:02:00.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 75   [00:02:01.000] 	Files (1)

Info 75   [00:02:02.000] -----------------------------------------------
Info 75   [00:02:03.000] Project '/dev/null/inferredProject2*' (Inferred)
Info 75   [00:02:04.000] 	Files (1)

Info 75   [00:02:05.000] -----------------------------------------------
Info 75   [00:02:06.000] Open files: 
Info 75   [00:02:07.000] 	FileName: /user/username/projects/myproject/a/b/f1.ts ProjectRootPath: undefined
Info 75   [00:02:08.000] 		Projects: /dev/null/inferredProject1*,/user/username/projects/myproject/a/c/tsconfig.json
Info 75   [00:02:09.000] 	FileName: /user/username/projects/myproject/a/c/f3.ts ProjectRootPath: undefined
Info 75   [00:02:10.000] 		Projects: /user/username/projects/myproject/a/c/tsconfig.json
Info 75   [00:02:11.000] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/a/b/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info 76   [00:02:12.000] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/a/b/jsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info 77   [00:02:13.000] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/a/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info 78   [00:02:14.000] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/a/jsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info 79   [00:02:15.000] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info 80   [00:02:16.000] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/jsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info 81   [00:02:17.000] Starting updateGraphWorker: Project: /dev/null/inferredProject1*
Info 82   [00:02:18.000] FileWatcher:: Close:: WatchInfo: /a/lib/lib.d.ts 500 undefined Project: /dev/null/inferredProject1* WatchType: Missing file
Info 83   [00:02:19.000] Finishing updateGraphWorker: Project: /dev/null/inferredProject1* Version: 2 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 84   [00:02:20.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 85   [00:02:21.000] 	Files (0)



Info 86   [00:02:22.000] -----------------------------------------------
Info 87   [00:02:23.000] Starting updateGraphWorker: Project: /dev/null/inferredProject2*
Info 88   [00:02:24.000] FileWatcher:: Close:: WatchInfo: /a/lib/lib.d.ts 500 undefined Project: /dev/null/inferredProject2* WatchType: Missing file
Info 89   [00:02:25.000] Finishing updateGraphWorker: Project: /dev/null/inferredProject2* Version: 2 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 90   [00:02:26.000] Project '/dev/null/inferredProject2*' (Inferred)
Info 91   [00:02:27.000] 	Files (0)



Info 92   [00:02:28.000] -----------------------------------------------
Info 93   [00:02:29.000] After ensureProjectForOpenFiles:
Info 94   [00:02:30.000] Project '/user/username/projects/myproject/a/c/tsconfig.json' (Configured)
Info 94   [00:02:31.000] 	Files (3)

Info 94   [00:02:32.000] -----------------------------------------------
Info 94   [00:02:33.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 94   [00:02:34.000] 	Files (0)

Info 94   [00:02:35.000] -----------------------------------------------
Info 94   [00:02:36.000] Project '/dev/null/inferredProject2*' (Inferred)
Info 94   [00:02:37.000] 	Files (0)

Info 94   [00:02:38.000] -----------------------------------------------
Info 94   [00:02:39.000] Open files: 
Info 94   [00:02:40.000] 	FileName: /user/username/projects/myproject/a/b/f1.ts ProjectRootPath: undefined
Info 94   [00:02:41.000] 		Projects: /user/username/projects/myproject/a/c/tsconfig.json
Info 94   [00:02:42.000] 	FileName: /user/username/projects/myproject/a/c/f3.ts ProjectRootPath: undefined
Info 94   [00:02:43.000] 		Projects: /user/username/projects/myproject/a/c/tsconfig.json
After running Timeout callback:: count: 0

PolledWatches::
/a/lib/lib.d.ts:
  {"pollingInterval":500}
/user/username/projects/myproject/a/b/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/a/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/a/c/node_modules/@types:
  {"pollingInterval":500}

PolledWatches *deleted*::
/user/username/projects/myproject/a/b/tsconfig.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/a/b/jsconfig.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/a/tsconfig.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/a/jsconfig.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/tsconfig.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/jsconfig.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/a/c/jsconfig.json:
  {"pollingInterval":2000}

FsWatches::
/user/username/projects/myproject/a/c/tsconfig.json:
  {}
/user/username/projects/myproject/a/c/f2.ts: *new*
  {}

Inferred project: /dev/null/inferredProject1* isOrphan:: true isClosed: false
Inferred project: /dev/null/inferredProject2* isOrphan:: true isClosed: false