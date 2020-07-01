# Orbix360 Core Elements

"Elements" are A-Frame entities that can be placed in Orbix360 Scenes and have 
properties such as position, rotation, etc. that can be edited via the 
Orbix360 interface.  

An Element definition consists of 2 parts:

* A `schema.json` file that defines the properties 
that will be editable for the Element
* A `template.html` file that defines the A-Frame HTML for the Element, including 
where the custom properties defined in the schema are injected

## Element Template Definition

An element template is simply a snippet of A-Frame HTML that has 
placeholders for variables that are defined in the Element schema definition

For example, below is the template for the Sky element:
```html
<a-sky class="" src="{{image}}"
         radius="{{radius}}" color="{{color}}"
       {{additional_components}}
></a-sky>
```

## Element Schema Definiton

An element schema definition is a JSON document that defines the 
properties and defaults for the element.   For example, below is the schema 
for the Sky element:
```json
{
   "image": {
     "type": "file",
     "default": "https://storage.googleapis.com/orbix360-qa-plugins/defaults/images/stars.jpeg"
   },
   "color": {
     "type": "string",
     "default": "#FFF"
   },
   "radius": {
     "type": "string",
     "default": "1100"
   },
   "additional_components": {
     "type": "string",
     "field": "textarea",
     "default": ""
   }
 }
```

Each property in the schema definition has the following fields:

| Property      | Description           
| ------------- |:-------------|
| type          | one of: string, boolean, file (if you need a numeric property, just use string for now) |
| default       | The default value for the property if no value is set       |
| field         | The input type to use.  For now this can only be used to customize a string property to use a textarea input instead of a regular text input      | 

This schema definition will be used to automatically generate an input form for 
the Element in the Orbix360.com interface. 

### Additional components

A useful mechanism for adding additional A-Frame components to an entity 
(such as animations, etc) is to define a property like "additional_components" 
that is populated in the template inside of the entity tag, as shown in the example 
above.  For example to add a rotation animation you could set something like
the following for the additional_components property:
`animation__rotate="property: rotation; to: 0 360 0; loop: true; dur: 10000;"`

## Core Elements

To understand how schemas and templates are defined and used, take a look at the 
Core Elements examples provided. 

