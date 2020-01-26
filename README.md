# Kava

BRVTAL GHOST THEME

Demo: [kava.zutrinken.com](https://kava.zutrinken.com/)

## Screenshots

<table>
<tr>
<td valign="top">
<img src="https://raw.githubusercontent.com/zutrinken/kava/master/src/screenshot-desktop.jpg" />
</td>
<td valign="top">
<img src="https://raw.githubusercontent.com/zutrinken/kava/master/src/screenshot-mobile.jpg" />
</td>
</tr>
</table>

## Setup [Disqus](https://disqus.com/)

1. Go to __Code injection__.  
2. Add this to __Blog Header__:  
````
<script>var disqus = 'YOUR_DISQUS_SHORTNAME';</script>
````

## Setup search

The search function is build with [ghostHunter](https://github.com/jamalneufeld/ghostHunter):

1. Go to __Integrations__.  
2. Choose __Add custom integration__, name it `ghostHunter` and choose __Create__. Copy the generated Content API Key.  
3. Go to __Code injection__.  
4. Add this to __Blog Header__:  
````
<script>
  var ghosthunter_key = 'PASTE_THE_GENERATED_KEY_HERE';
  //optional: set your custom ghost_root url, default is "/ghost/api/v2"
  var ghost_root_url = '/ghost/api/v2';
</script>
````

## Development

Install [Grunt](http://gruntjs.com/getting-started/):

	npm install -g grunt-cli

Install Grunt modules:

	npm install

Install [Bower](http://bower.io):

	npm install -g bower

Install Bower components:

	bower install

Build Grunt project:

	grunt

Distribute Grunt project:

	grunt build

## Copyright & License

Copyright (C) 2015-2019 Peter Amende - Released under the [MIT License](https://github.com/zutrinken/bleak/blob/master/LICENSE).
