/// <reference path="./_helpers.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export class RunnableFuture {
				public run(): void;
			}
		}
	}
}