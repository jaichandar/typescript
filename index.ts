/* 
Primitive Data type
1. number
2. string
3. bool
4. undefined
5. unknown
6. any <- should not use
7. null

reference data type
1. { value: string }
2. { value: string }[] => array of object, with key of value
3. { value: string | number } => value might be string or number
4. { one: string } | { two: string } | { three: string } => value might of one or two or three (literals)

Tuples:
let result: [string, number, bool] = ['testing', 123, false]
    1. Named Tuples:
        let Graph: [x: number, y: number] = [1,2]

Dynamic Keys:
1. type FormDetails = {
    [index: string]: number | string | boolean
}

Records:
const steps: Record<number, JSX.Element> = {
    0: <Tab />,
    1: <Tab1 />,
    2: <Tab2 />
}

Enum: 
enum StatusCode = {
    NotFound = 404,
    Success = 200,
    Created = 201,
    NotAuthorized = 401,
    InternalServerError = 500
}

// Generics
1. Partial: 
    Definition - it makes all the properties optional
    Syntax - Partial<type>
    Example 
        type User = { name: string, id: string }
        Partial<User> => { name?: string, id?: string }
2. Required:
    Definition - it makes all the properties required
    Syntax - Required<type>
    Example 
        type User = { name?: string, id?: string }
        Required<User> => { name: string, id: string }
3. Pick:
    Definition - it pick the key which we mentioned 
    Syntax - Pick<type, 'name' | 'id'>;
    Example
        type Student = { id: id, name: string, address: { street: string, doorNo: number, zipCode: number } }
        const data: Pick<Student, 'id' | 'name'> = { id: 2, name: 'jaichandar' }
4. Omit: 
    Definition - it leave the keys which you mentioned
    syntax - Omit<type, 'key' | 'key'...>
    Example
        type Student = { id: id, name: string, address: { street: string, doorNo: number, zipCode: number } }
        const data: Omit<Student, 'address'> = { id: 2, name: 'jaichandar' }
5. Generic
    Definition - we used to write common function, we need to pass type as arguments
    Syntax - <>
    Example: 
        const getLastElement:<T> = (array: T[]): T => {
            return array[array.length - 1]
        }
        const ids = [1,2,3,4,5,6,7,8,9,0];
        const names = ["testing", 'testing1', 'testing2'];
        const student = [ { id: 1, name: 'testing1' }, { id: 2, name: 'testing2' }, { id: 3, name: 'testing3' } ]

        const result = getLastElement<number>(ids);
        const result1 = getLastElement<string>(names);
        const result2 = getLastElement<{ id: number, name: string }>(student);
*/

type Education = {
    organisationName: string,
}

type StudentType = {
    id: number, 
    name: string,
    age: number, 
    address?: {
        street: string,
        doorNo: string,
        zipCode: number,
    }
}

const students: StudentType[] = [
    {
        id: 1,
        name: 'testing',
        age: 35,
        address: {
            street: 'testing street',
            doorNo: '123',
            zipCode: 123123
        }
    },
    {
        id: 2,
        name: 'testing 1',
        age: 12,
        address: {
            street: 'testing street',
            doorNo: '123',
            zipCode: 234234
        }
    },
    {
        id: 3,
        name: 'testing 2',
        age: 34
    }
]

students.forEach((student) => {
    if (student.address?.street) {
        console.log(student.address.doorNo)
    }
})