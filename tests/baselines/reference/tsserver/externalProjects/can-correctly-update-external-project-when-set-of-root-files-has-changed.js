currentDirectory:: / useCaseSensitiveFileNames: false
Info 0    [00:00:11.000] Provided types map file "/typesMap.json" doesn't exist
Creating project service
//// [/a/b/f1.ts]
let x = 1

//// [/a/b/f2.ts]
let y = 1


Info 1    [00:00:12.000] FileWatcher:: Added:: WatchInfo: /a/b/f1.ts 500 undefined WatchType: Closed Script info
Info 2    [00:00:13.000] Starting updateGraphWorker: Project: project
Info 3    [00:00:14.000] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined Project: project WatchType: Missing file
Info 4    [00:00:15.000] DirectoryWatcher:: Added:: WatchInfo: /node_modules/@types 1 undefined Project: project WatchType: Type roots
Info 5    [00:00:16.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /node_modules/@types 1 undefined Project: project WatchType: Type roots
Info 6    [00:00:17.000] Finishing updateGraphWorker: Project: project Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 7    [00:00:18.000] Project 'project' (External)
Info 8    [00:00:19.000] 	Files (1)
	/a/b/f1.ts Text-1 "let x = 1"


	a/b/f1.ts
	  Root file specified for compilation

Info 9    [00:00:20.000] -----------------------------------------------
Info 10   [00:00:21.000] FileWatcher:: Added:: WatchInfo: /a/b/f2.ts 500 undefined WatchType: Closed Script info
Info 11   [00:00:22.000] Starting updateGraphWorker: Project: project
Info 12   [00:00:23.000] Finishing updateGraphWorker: Project: project Version: 2 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 13   [00:00:24.000] Project 'project' (External)
Info 14   [00:00:25.000] 	Files (2)
	/a/b/f1.ts Text-1 "let x = 1"
	/a/b/f2.ts Text-1 "let y = 1"


	a/b/f1.ts
	  Root file specified for compilation
	a/b/f2.ts
	  Root file specified for compilation

Info 15   [00:00:26.000] -----------------------------------------------