# reactdotnetstore
React With A DotNet API





##Notes:
```sh

	Repo: https://github.com/TryCatchLearn/Restore

	.net is a developers platform.
```

Implement: https://socket.io/how-to/use-with-react#example

This is how you check for the type of dotnet version you have.

```sh	
	dotnet --info

	dotnet -h		Helps us with options
	dotnet 
	dotnet new list		Gives a list of project types we can create with the sdk.
```


This is how you check node version

```sh
	node --version
	npm --version
```


Environment variables:
  Not set

global.json file:
  Not found

Learn more:
  https://aka.ms/dotnet/info

Download .NET:
  https://aka.ms/dotnet/download

----------------------------------------------
## Application Program Interface = API

	dotnet cli  = command line interface of how we communicate with .net

	Creating a .Net Web API project gives us some starter files to work with upon creation.

	dotnet is a high level language.

	Some examples of how to start the api project from /Api/ Directory.

```sh
	dottnet watch
	dotnet watch run
	dotnet watch --no-hot-reload 	<<<Most reliable.
```

## Languages .Net EcoSystem

	C# 
	F# 			f# Runtime
	and VB (visual basics)  VB Runtine


	clr Langauge runtime converts the code to local common language.

## REST
	Rest = Represenational State Transfer
	Pattern for creating HTTP services/ set of constraints


---------------------------------------------------
	1. 	dotnet new sln			= 	The template "Solution File" was created successfully.
	2.	dotnet new webapi
		dotnet new webapi -o Api   	=	The template "ASP.NET Core Web API" was created successfully.
		dotnet new webapi --use-controllers -n Api 	= for 8.0 doesn't create a controllers folder.
	3.	dotnet sln add Api		=	Project `Api\Api.csproj` added to the solution.
	4.	code .				=	Opens visual studio in current directory.
	5.	Add vs code to path		=	Use ctrl+`  TerminalPanel opens now = >path  Select "Shell command: Install "code" command in PATH
	6. 	ctr+c				=	Stops the application running in  terminal.
	7. 	cd Api && dotnet run		=	This will start the donet application running.

	8.	7 Picks random port  click localhost:{PORT} in terminal and finish url like this 				
		http://localhost:5258/swagger/index.html
	9.	It should started you off with the weather route if you try it. gives you weather for today.

VS Code Extentions  - Turn you vs code into an efficient IDE  go to extensions and use these
	1.	Turn it into a IDES
	2. 	NuGet Gallery v0.0.24 by pcislo
	3. 	SQLite v0.14.1 alexcvzz 2,302,542 (63) Explore and query SQLite databases
	4.	Tag/Tag Auto rename paired HTML/XML tag

Api/Properties/launchesttings.json
	1. profiles   launchBrower: false and launchurl: "swagger" << deleted.
	2. removed profiles https, and IIS Express as we only need one application to start our application.

Api.csproj

	1. <Nullable>Enabled</Nullable>  switched too <Nullable>Disabled</Nullable>
	Warning on restarting dotnet 
	C:\@caresworld\trainingProjects\reactdotnetstore\Api\WeatherForecast.cs(11,18): 
	warning CS8632: The annotation for nullable reference types should only
	be used in code within a '#nullable' annotations context. 
	[C:\@caresworld\trainingProjects\reactdotnetstore\Api\Api.csproj]
	Note: it makes the strings optional.


settings excludde certain folders and view in user settings on files to exclude.

**/obj
**/bin

Change appsettings.Development.json

Api/Entities
	Created a new folder called entities under Api
Right under Enties Select new Class create the name of class top terminal first we done was Prooduct

Ctrl + .
	Bring up options to remove uncessary usings

DbContext Class = is like a session, which is a gateway to the database. it manages the connection to the database.
DbContext uses one more DbSets represent tables inside the database.
	1.	UYses 

	Query database with Linq Query.

The oject relationial mapper job..

How to add entity framework to our package.
	1.	make sure NuGet Gallery is enabled or installed. from pcislo
	2.	Ctrl + Shit + P  	= 	Opens Command Pallette to search for Open NuGet Gallery
	3.	Search for microsoft.entityframeworkcore, and microsoft.entityframeworkcore.Sqlite  not core
	4.	Use filter to select the package and select the version in right panel.  this project was done using 8.0
	5. 	Take the package to isntall and click the checkbox by API.csproj select proper version and click install.
	6.	Microsoft.EntityFrameworkCore.Design
		microsoft.entityframeworkcore.Sqlite
		

When creating a class : DbContext you can put your mouse next to the class name left of : and do ctrl + . and select


	1.
```sh
	public class StoreContext : DbContext
	{
        
    	}
```

	Use:	Generate Constructor "StoreContext(options)
	
	2.
```sh
	public class StoreContext : DbContext
	{
        	public StoreContext(DbContextOptions options) : base(options)
        	{
			
        	}
    	}
```

	in side public class
		you can start typing prop and tab a MyProperty value.

		public DbSet<Product> Products { get; set; }



Go to  Program.cs  use the section for use and injection into our class.
insert code to be used with entity frameworks.

	// Add services to the container.

```sh

	builder.Services.AddDbContext<StoreContext>(opt =>
	{
	    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
	});

```

on appsettings.Development.json

```sh
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Information"
    }
  },
  "ConnectionStrings": {
    "DefaultConnection": "Data source=store.db"
  }
}

```

##  How to create migrations.

You will need dotnet ef nuget to do migrations first upgrade your package tool.
You can google search for it, or use the following commands below.

NOTE: Be sure to be in the Api directory when you do this.

```sh

    $ dotnet tool update --global dotnet-ef
    --Skipping NuGet package signature verification.
    --Tool 'dotnet-ef' was successfully updated from version '6.0.4' to version '8.0.1'.

```

You must all make sure the Api has stopped running before doing anything regard to the migrations

```sh
dotnet-ef

                     _/\__
               ---==/    \\
         ___  ___   |.    \|\
        | __|| __|  |  )   \\\
        | _| | _|   \_/ |  //|\\
        |___||_|       /   \\\/\\

Entity Framework Core .NET Command-line Tools 8.0.1

Usage: dotnet ef [options] [command]

Options:
  --version        Show version information
  -h|--help        Show help information
  -v|--verbose     Show verbose output.
  --no-color       Don't colorize output.
  --prefix-output  Prefix output with level.

Commands:
  database    Commands to manage the database.
  dbcontext   Commands to manage DbContext types.
  migrations  Commands to manage migrations.

Use "dotnet ef [command] --help" for more information about a command.

```




## Migration Commands

From Api Directory path.
cd Api/ && dotnet ef [command]


```sh

    dotnet ef migrations add InitialCreate -o Data/Migrations

```

Once Migrations is done you can update the database

```sh
    dotnet ef migrations add InitialCreate -o Data/Migrations
    dotnet ef database update
```

Go to CTRT + Shift + P to open up command palette and search for
    sql   SQLite: Open Database
    Then Select databse avaialble.


## How to drop the database


```sh
		dotnet ef database drop
		Build started...
		Build succeeded.
		Are you sure you want to drop the database 'main' on server 'store.db'? (y/N)
		y
		Dropping database 'main' on server 'store.db'.
		Successfully dropped database 'main'.

```