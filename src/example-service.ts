import {container, injectable} from "tsyringe";
import {Foo} from "./foo-service";

@injectable()
export class ExampleService {
   constructor(public foo: Foo) {
   }

   doAFooThing() {
       return this.foo.doTheThing();
   }

   static build () {
       return container.resolve(ExampleService);
   }
}

export const exampleService = ExampleService.build();
