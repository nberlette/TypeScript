currentDirectory:: /users/username/projects/project useCaseSensitiveFileNames: false
Input::
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

//// [/users/username/projects/project/file1.ts]
const x = 10;

//// [/users/username/projects/project/file2.ts]
const y = 20;

//// [/users/username/projects/project/tsconfig.json]
{"compilerOptions":{"incremental":true}}


/a/lib/tsc.js -w -p tsconfig.json
Output::
>> Screen clear
[[90m12:00:23 AM[0m] Starting compilation in watch mode...

[[90m12:00:30 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/users/username/projects/project/file1.ts","/users/username/projects/project/file2.ts"]
Program options: {"incremental":true,"watch":true,"project":"/users/username/projects/project/tsconfig.json","configFilePath":"/users/username/projects/project/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/users/username/projects/project/file1.ts
/users/username/projects/project/file2.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/users/username/projects/project/file1.ts
/users/username/projects/project/file2.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/users/username/projects/project/file1.ts (used version)
/users/username/projects/project/file2.ts (used version)

PolledWatches::
/users/username/projects/project/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/users/username/projects/project/tsconfig.json: *new*
  {}
/users/username/projects/project/file1.ts: *new*
  {}
/users/username/projects/project/file2.ts: *new*
  {}
/a/lib/lib.d.ts: *new*
  {}

FsWatchesRecursive::
/users/username/projects/project: *new*
  {}

exitCode:: ExitStatus.undefined

//// [/users/username/projects/project/file1.js]
var x = 10;


//// [/users/username/projects/project/file2.js]
var y = 20;


//// [/users/username/projects/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../a/lib/lib.d.ts","./file1.ts","./file2.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"5029505981-const x = 10;","affectsGlobalScope":true},{"version":"2026007743-const y = 20;","affectsGlobalScope":true}],"root":[2,3],"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2,3]},"version":"FakeTSVersion"}

//// [/users/username/projects/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../a/lib/lib.d.ts",
      "./file1.ts",
      "./file2.ts"
    ],
    "fileInfos": {
      "../../../../a/lib/lib.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "affectsGlobalScope": true
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./file1.ts": {
        "original": {
          "version": "5029505981-const x = 10;",
          "affectsGlobalScope": true
        },
        "version": "5029505981-const x = 10;",
        "signature": "5029505981-const x = 10;",
        "affectsGlobalScope": true
      },
      "./file2.ts": {
        "original": {
          "version": "2026007743-const y = 20;",
          "affectsGlobalScope": true
        },
        "version": "2026007743-const y = 20;",
        "signature": "2026007743-const y = 20;",
        "affectsGlobalScope": true
      }
    },
    "root": [
      [
        2,
        "./file1.ts"
      ],
      [
        3,
        "./file2.ts"
      ]
    ],
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../a/lib/lib.d.ts",
      "./file1.ts",
      "./file2.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 744
}


Change::

Input::
//// [/users/username/projects/project/file2.ts]
const z = 10;


PolledWatches *deleted*::
/users/username/projects/project/node_modules/@types:
  {"pollingInterval":500}

FsWatches *deleted*::
/users/username/projects/project/tsconfig.json:
  {}
/users/username/projects/project/file1.ts:
  {}
/users/username/projects/project/file2.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive *deleted*::
/users/username/projects/project:
  {}

Output::
>> Screen clear
[[90m12:00:36 AM[0m] Starting compilation in watch mode...

[[90m12:00:46 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/users/username/projects/project/file1.ts","/users/username/projects/project/file2.ts"]
Program options: {"incremental":true,"watch":true,"project":"/users/username/projects/project/tsconfig.json","configFilePath":"/users/username/projects/project/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/users/username/projects/project/file1.ts
/users/username/projects/project/file2.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/users/username/projects/project/file1.ts
/users/username/projects/project/file2.ts

Shape signatures in builder refreshed for::
/users/username/projects/project/file2.ts (computed .d.ts)
/users/username/projects/project/file1.ts (computed .d.ts)

PolledWatches::
/users/username/projects/project/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/users/username/projects/project/tsconfig.json: *new*
  {}
/users/username/projects/project/file1.ts: *new*
  {}
/users/username/projects/project/file2.ts: *new*
  {}
/a/lib/lib.d.ts: *new*
  {}

FsWatchesRecursive::
/users/username/projects/project: *new*
  {}

exitCode:: ExitStatus.undefined

//// [/users/username/projects/project/file1.js] file written with same contents
//// [/users/username/projects/project/file2.js]
var z = 10;


//// [/users/username/projects/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../a/lib/lib.d.ts","./file1.ts","./file2.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"5029505981-const x = 10;","signature":"-4001438729-declare const x = 10;\n","affectsGlobalScope":true},{"version":"3317474623-const z = 10;","signature":"-368931399-declare const z = 10;\n","affectsGlobalScope":true}],"root":[2,3],"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2,3]},"version":"FakeTSVersion"}

//// [/users/username/projects/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../a/lib/lib.d.ts",
      "./file1.ts",
      "./file2.ts"
    ],
    "fileInfos": {
      "../../../../a/lib/lib.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "affectsGlobalScope": true
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./file1.ts": {
        "original": {
          "version": "5029505981-const x = 10;",
          "signature": "-4001438729-declare const x = 10;\n",
          "affectsGlobalScope": true
        },
        "version": "5029505981-const x = 10;",
        "signature": "-4001438729-declare const x = 10;\n",
        "affectsGlobalScope": true
      },
      "./file2.ts": {
        "original": {
          "version": "3317474623-const z = 10;",
          "signature": "-368931399-declare const z = 10;\n",
          "affectsGlobalScope": true
        },
        "version": "3317474623-const z = 10;",
        "signature": "-368931399-declare const z = 10;\n",
        "affectsGlobalScope": true
      }
    },
    "root": [
      [
        2,
        "./file1.ts"
      ],
      [
        3,
        "./file2.ts"
      ]
    ],
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../a/lib/lib.d.ts",
      "./file1.ts",
      "./file2.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 843
}

