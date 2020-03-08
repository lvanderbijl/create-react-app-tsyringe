import {container, injectable} from "tsyringe";

@injectable()
export class Foo {
    doTheThing() {
        console.log('it works');
    }

    static build() {
        return container.resolve(Foo);
    }
}