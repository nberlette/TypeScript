currentDirectory:: / useCaseSensitiveFileNames: false
Info 0    [00:00:11.000] Provided types map file "/typesMap.json" doesn't exist
Creating project service
//// [/a/b/app.ts]
let x = 1;

//// [/a/b/lib.ts]



Info 1    [00:00:12.000] FileWatcher:: Added:: WatchInfo: /a/b/app.ts 500 undefined WatchType: Closed Script info
Info 2    [00:00:13.000] FileWatcher:: Added:: WatchInfo: /a/b/lib.ts 500 undefined WatchType: Closed Script info
Info 3    [00:00:14.000] Starting updateGraphWorker: Project: /a/b/proj1
Info 4    [00:00:15.000] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined Project: /a/b/proj1 WatchType: Missing file
Info 5    [00:00:16.000] DirectoryWatcher:: Added:: WatchInfo: /a/b/node_modules/@types 1 undefined Project: /a/b/proj1 WatchType: Type roots
Info 6    [00:00:17.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /a/b/node_modules/@types 1 undefined Project: /a/b/proj1 WatchType: Type roots
Info 7    [00:00:18.000] Finishing updateGraphWorker: Project: /a/b/proj1 Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 8    [00:00:19.000] Project '/a/b/proj1' (External)
Info 9    [00:00:20.000] 	Files (2)
	/a/b/app.ts Text-1 "let x = 1;"
	/a/b/lib.ts Text-1 ""


	app.ts
	  Root file specified for compilation
	lib.ts
	  Root file specified for compilation

Info 10   [00:00:21.000] -----------------------------------------------
Info 11   [00:00:22.000] FileWatcher:: Close:: WatchInfo: /a/b/app.ts 500 undefined WatchType: Closed Script info
Info 12   [00:00:23.000] Project '/a/b/proj1' (External)
Info 12   [00:00:24.000] 	Files (2)

Info 12   [00:00:25.000] -----------------------------------------------
Info 12   [00:00:26.000] Open files: 
Info 12   [00:00:27.000] 	FileName: /a/b/app.ts ProjectRootPath: undefined
Info 12   [00:00:28.000] 		Projects: /a/b/proj1
Info 12   [00:00:30.000] FileWatcher:: Triggered with /a/b/lib.ts 2:: WatchInfo: /a/b/lib.ts 500 undefined WatchType: Closed Script info
Info 13   [00:00:31.000] FileWatcher:: Close:: WatchInfo: /a/b/lib.ts 500 undefined WatchType: Closed Script info
Info 14   [00:00:32.000] Scheduled: /a/b/proj1
Info 15   [00:00:33.000] Scheduled: *ensureProjectForOpenFiles*
Info 16   [00:00:34.000] Elapsed:: *ms FileWatcher:: Triggered with /a/b/lib.ts 2:: WatchInfo: /a/b/lib.ts 500 undefined WatchType: Closed Script info
Info 17   [00:00:37.000] `remove Project::
Info 18   [00:00:38.000] Project '/a/b/proj1' (External)
Info 19   [00:00:39.000] 	Files (2)
	/a/b/app.ts
	/a/b/lib.ts


	app.ts
	  Root file specified for compilation
	lib.ts
	  Root file specified for compilation

Info 20   [00:00:40.000] -----------------------------------------------
Info 21   [00:00:41.000] DirectoryWatcher:: Close:: WatchInfo: /a/b/node_modules/@types 1 undefined Project: /a/b/proj1 WatchType: Type roots
Info 22   [00:00:42.000] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /a/b/node_modules/@types 1 undefined Project: /a/b/proj1 WatchType: Type roots
Info 23   [00:00:43.000] FileWatcher:: Close:: WatchInfo: /a/lib/lib.d.ts 500 undefined Project: /a/b/proj1 WatchType: Missing file
Info 24   [00:00:44.000] Creating configuration project /a/b/tsconfig.json
Info 25   [00:00:45.000] FileWatcher:: Added:: WatchInfo: /a/b/tsconfig.json 2000 undefined Project: /a/b/tsconfig.json WatchType: Config file
Info 26   [00:00:46.000] Loading configured project /a/b/tsconfig.json
Info 27   [00:00:47.000] Config: /a/b/tsconfig.json : {
 "rootNames": [
  "/a/b/app.ts"
 ],
 "options": {
  "configFilePath": "/a/b/tsconfig.json"
 }
}
Info 28   [00:00:48.000] DirectoryWatcher:: Added:: WatchInfo: /a/b 1 undefined Config: /a/b/tsconfig.json WatchType: Wild card directory
Info 29   [00:00:49.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /a/b 1 undefined Config: /a/b/tsconfig.json WatchType: Wild card directory
Info 30   [00:00:50.000] Starting updateGraphWorker: Project: /a/b/tsconfig.json
Info 31   [00:00:51.000] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined Project: /a/b/tsconfig.json WatchType: Missing file
Info 32   [00:00:52.000] DirectoryWatcher:: Added:: WatchInfo: /a/b/node_modules/@types 1 undefined Project: /a/b/tsconfig.json WatchType: Type roots
Info 33   [00:00:53.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /a/b/node_modules/@types 1 undefined Project: /a/b/tsconfig.json WatchType: Type roots
Info 34   [00:00:54.000] Finishing updateGraphWorker: Project: /a/b/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 35   [00:00:55.000] Project '/a/b/tsconfig.json' (Configured)
Info 36   [00:00:56.000] 	Files (1)
	/a/b/app.ts Text-1 "let x = 1;"


	app.ts
	  Matched by default include pattern '**/*'

Info 37   [00:00:57.000] -----------------------------------------------
Info 38   [00:00:58.000] Before ensureProjectForOpenFiles:
Info 39   [00:00:59.000] Project '/a/b/tsconfig.json' (Configured)
Info 39   [00:01:00.000] 	Files (1)

Info 39   [00:01:01.000] -----------------------------------------------
Info 39   [00:01:02.000] Open files: 
Info 39   [00:01:03.000] 	FileName: /a/b/app.ts ProjectRootPath: undefined
Info 39   [00:01:04.000] 		Projects: /a/b/tsconfig.json
Info 39   [00:01:05.000] After ensureProjectForOpenFiles:
Info 40   [00:01:06.000] Project '/a/b/tsconfig.json' (Configured)
Info 40   [00:01:07.000] 	Files (1)

Info 40   [00:01:08.000] -----------------------------------------------
Info 40   [00:01:09.000] Open files: 
Info 40   [00:01:10.000] 	FileName: /a/b/app.ts ProjectRootPath: undefined
Info 40   [00:01:11.000] 		Projects: /a/b/tsconfig.json
Info 40   [00:01:13.000] FileWatcher:: Triggered with /a/b/tsconfig.json 2:: WatchInfo: /a/b/tsconfig.json 2000 undefined Project: /a/b/tsconfig.json WatchType: Config file
Info 41   [00:01:14.000] `remove Project::
Info 42   [00:01:15.000] Project '/a/b/tsconfig.json' (Configured)
Info 43   [00:01:16.000] 	Files (1)
	/a/b/app.ts


	app.ts
	  Matched by default include pattern '**/*'

Info 44   [00:01:17.000] -----------------------------------------------
Info 45   [00:01:18.000] DirectoryWatcher:: Close:: WatchInfo: /a/b 1 undefined Config: /a/b/tsconfig.json WatchType: Wild card directory
Info 46   [00:01:19.000] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /a/b 1 undefined Config: /a/b/tsconfig.json WatchType: Wild card directory
Info 47   [00:01:20.000] FileWatcher:: Close:: WatchInfo: /a/b/tsconfig.json 2000 undefined Project: /a/b/tsconfig.json WatchType: Config file
Info 48   [00:01:21.000] DirectoryWatcher:: Close:: WatchInfo: /a/b/node_modules/@types 1 undefined Project: /a/b/tsconfig.json WatchType: Type roots
Info 49   [00:01:22.000] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /a/b/node_modules/@types 1 undefined Project: /a/b/tsconfig.json WatchType: Type roots
Info 50   [00:01:23.000] FileWatcher:: Close:: WatchInfo: /a/lib/lib.d.ts 500 undefined Project: /a/b/tsconfig.json WatchType: Missing file
Info 51   [00:01:24.000] Scheduled: *ensureProjectForOpenFiles*, Cancelled earlier one
Info 52   [00:01:25.000] Elapsed:: *ms FileWatcher:: Triggered with /a/b/tsconfig.json 2:: WatchInfo: /a/b/tsconfig.json 2000 undefined Project: /a/b/tsconfig.json WatchType: Config file
Info 53   [00:01:28.000] FileWatcher:: Added:: WatchInfo: /a/b/lib.ts 500 undefined WatchType: Closed Script info
Info 54   [00:01:29.000] Starting updateGraphWorker: Project: /a/b/proj1
Info 55   [00:01:30.000] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined Project: /a/b/proj1 WatchType: Missing file
Info 56   [00:01:31.000] DirectoryWatcher:: Added:: WatchInfo: /a/b/node_modules/@types 1 undefined Project: /a/b/proj1 WatchType: Type roots
Info 57   [00:01:32.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /a/b/node_modules/@types 1 undefined Project: /a/b/proj1 WatchType: Type roots
Info 58   [00:01:33.000] Finishing updateGraphWorker: Project: /a/b/proj1 Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 59   [00:01:34.000] Project '/a/b/proj1' (External)
Info 60   [00:01:35.000] 	Files (2)
	/a/b/app.ts Text-1 "let x = 1;"
	/a/b/lib.ts Text-2 ""


	app.ts
	  Root file specified for compilation
	lib.ts
	  Root file specified for compilation

Info 61   [00:01:36.000] -----------------------------------------------