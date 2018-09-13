# React Smooth Image

Are you tired of your react app's layout flashing around because an
image is yet to load and its taking zero space until then?

Does the progressive image loading from top bottom makes you cringe ?

You wish there was something neat out there that `just works` ?

Yea, mee too.


```
  "Fear not, for i am here"
  
  - All Might.
```

## Demo

First one is a normal image, the second one is using `react-smooth-image`.

![](./demo/images/meh-react-logo.gif)   ![](./demo/images/smooth-react-logo-3.gif)

## Install
```
$ npm install --save react-smooth-image
```

if you prefer to use yarn then

```
$ yarn add react-smooth-image
```


## Usage

````js
import SmoothImage from 'react-smooth image';
.
.
.

render() {
return (
  <div className="image-container">
     <SmoothImage
         src="https://..."
         alt="a nice image of mordor"
         transitionTime={1.0}
         //Other props if you choose to use them
      />
  </div>
  )
}
````
## Props

#### src
    type: string
    is mandatory: yes
    Description: The source url of the image to be loaded.

#### alt
    type: string
    is mandatory: yes
    Description: The `alt` text to be passed to the image. Facilitates accessibility and screen readers and including this is always a good idea.

#### placeholderImgUrl
    type: string
    is mandatory: no
    default value: ''
    Description: if you wanna use a placeholder image, you may pass the url here or pass an embedded image data.
    
#### containerStyles
    type: object
    is mandatory: no
    Description: If you want to overwrite the container styles, pass a js style object to it like you would pass in a style attribute in a regular react element.

#### imageStyles
    type: object
    is mandatory: no
    Description: If you want to overwrite the image styles, pass a style object in this prop.

#### transitionTimingFunction
    type: string
    is mandatory: no
    default value: "ease-in"
    Description: The css transition-timing function to use when the image is loaded.
    
#### transitionTime
    type: number
    is mandatory: no
    default value: 0.3s
    Description: The time for the image to apply the given transition in seconds. For eg 0.3

    

