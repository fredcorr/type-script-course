// const names : Array<string | number > = []

// const promise: Promise<string> = new Promise( ( resolve, reject ) => {
//     setTimeout(() => {
//         resolve('this is done!')
//     }, 2000 )
// }) 

// promise.then(data => {
//     data.split( ' ' )
// })

function merge<T extends object, U extends object>(objsA: T, objsB: U) {
    return Object.assign( objsA, objsB )
}

const mergeObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30} );
console.log( mergeObj );

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>( element: T ): [ T, string ] {
    let descriptionText = 'Got no value';

    if( element.length === 1 ) {
        descriptionText = 'Got 1 value'
    } else if ( element.length > 1 ) {
        descriptionText = 'Got ' + element.length + ' value'
    }

    return [ element, descriptionText ]
}

console.log( countAndDescribe( 'Hi there' ) );

function extractAndConvert<T extends object, U extends keyof T>( obj: T, key: U ){
    return 'Value ' + obj[key]
}

extractAndConvert({ name: 'Max' }, 'name')

class DataStorage<T extends string | number | boolean > {
    private data: T[] = [];

    addItem( item:T ) {
        this.data.push( item );
    }

    removeItem( item: T ){
        this.data.splice( this.data.indexOf( item ), 1 )
    }

    getItems() {
        return [...this.data ]
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Bacon')

interface CourseGoal {
    title: string,
    description: string,
    completeUntil: Date
}

function createCourse( title: string, description: string, date: Date ): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {}
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}