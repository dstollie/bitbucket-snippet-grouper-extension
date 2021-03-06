	
	 ____     _____   _____   ______  ____    ______  ____    ______  ____    
	/\  _`\  /\  __`\/\  __`\/\__  _\/\  _`\ /\__  _\/\  _`\ /\  _  \/\  _`\  
	\ \ \L\ \\ \ \/\ \ \ \/\ \/_/\ \/\ \,\L\_\/_/\ \/\ \ \L\ \ \ \L\ \ \ \L\ \
	 \ \  _ <'\ \ \ \ \ \ \ \ \ \ \ \ \/_\__ \  \ \ \ \ \ ,  /\ \  __ \ \ ,__/
	  \ \ \L\ \\ \ \_\ \ \ \_\ \ \ \ \  /\ \L\ \ \ \ \ \ \ \\ \\ \ \/\ \ \ \/ 
	   \ \____/ \ \_____\ \_____\ \ \_\ \ `\____\ \ \_\ \ \_\ \_\ \_\ \_\ \_\ 
	    \/___/   \/_____/\/_____/  \/_/  \/_____/  \/_/  \/_/\/ /\/_/\/_/\/_/ 
	
	Your Chrome Extensions by Websecurify
	

This project delivers an easy way to do extension development for Google Chrome. It does the following things for you:

* Compiles Jade and CoffeeScript for you, which means that you can use both in your extensions.
* Automatically reloads the extension as you make changes.
* Provides an easy mechanism to add more helpers to simplify your development.

More features will be added soon.

# Usage

Everything is controlled by grunt tasks.

	grunt run 		# prepares the extension for development
	grunt build		# builds the extension

Other tasks can be obtained by running `grunt --help`.

# Development Workflow

This is what you need to do to get started:

1. Make a copy of this project: fork it or just download it as it is.
2. Start the dev environment by running `grunt run` from the command line.
3. Load the extension by selecting the `ext` folder generated by the previous step.
4. Add your own code in the `src` folder.

Keep in mind that the `run` task will monitor the project for changes and automatically reload the extension.
