// type Hello = 'hello'
// type HelloWorld = `${Hello}, World`
// // type HelloWorld = "hello, World"
// -----------------------------------------------------------

// type name = 'name'
// type age = 'age'

// type Id = `${name|age}_id`
// // type Id = "name_id" | "age_id"

// ---------------------------------------------------------------

// type Id = 'name_id' | 'age_id'
// type Lang = 'en' | 'ja' | 'ko'

// type LangId = `${Lang}_${Id}`
// // type LangId = "en_name_id" | "en_age_id" | "ja_name_id" | "ja_age_id" | "ko_name_id" | "ko_age_id"
// --------------------------------------------------------------------

// type hello = 'hello'
// type world = 'world'

// type HelloWorldUp = Uppercase<`${hello}, ${world}`>
// // type HelloWorldUp = "HELLO, WORLD"

// type HelloWorldLow = Lowercase<HelloWorldUp>
// // type HelloWorldLow = "hello, world"
// ---------------------------------------------------------------------

// type Upper = 'HELLO'
// type Lower = 'hello'

// type CapLower = Capitalize<Lower>
// // type CapLower = "Hello"

// type UnCapUpper = Uncapitalize<Upper>
// // type UnCapUpper = "hELLO"

