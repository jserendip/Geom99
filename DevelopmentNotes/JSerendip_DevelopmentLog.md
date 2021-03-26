# James Serendip Development Log
tracking research and development time spent toward Geom99 Final Project for Team "Web Delta"
## Week 9-10
    This week's focus has been on the week 9 checklist - to go through various tools and options for 
    developing web maps, web apps, and custom web solutions applicable to Geom 99 final project for team 
    Web Delta, and also research for possible solutions for final collaborative project (Team Happy Puppies)

## Week 10-11
    Working through Experience Builder to examine its efficacy for our project

###    March 26 - After meeting with Shawn, we have decided to try more to make Experience Builder work for us
            Experience Builder Insights:  
            1) Use Different views to be able to show correct initial view of map
            since the Feature Views widget will cause a selection to zoom the map initially regardless of
            initial map settings.  This works great and helps me understand different ways to use the views feature!
            2) The text for the Views menu is NOT EDITABLE in the widget properties!  Only in the page menu!
            3) The Filter widget is amazing.  Added a View 2 for visuaoizing Stream Order using a series of filters
            for the user to select streams of order 1, 1&2, 1&2&3, or greater than3.  Very cool!


## Week 11-12

## Week 12-13

## Week 13-14

## Week 14-15



# Esri Configurables

##     Experience Builder

    ArcGIS Experience Builder is relatively new (about 1 year) and allows you to configure web apps without writing code. Build mapcentric or nonmapcentric apps and display them on a fixed or scrolling screen, on single or multiple pages. Perform a drag-and-drop operation to choose the tools you need from a rich set of widgets, design your own templates, and interact with your 2D and 3D content—all within one app. With ArcGIS Experience Builder, your web apps look great and run seamlessly on mobile devices.

https://www.esri.com/en-us/arcgis/products/arcgis-experience-builder/overview

https://www.youtube.com/watch?v=pNrsd5naN7U (short into)

https://www.youtube.com/watch?v=Vu6_pBa7zis (how to)
    
##    WebApp Builder

    WebApp Builder is the original "configurable" ArcGIS Online solution and is a little dated. It includes built-in tools so you can create 2D and 3D web apps for your workflows and your brand. It's user-friendly, flexible, and full of GIS functionality. Developers can build custom widgets and themes to extend ArcGIS Web AppBuilder. Display and analyze your data on any device without writing code. There is also a developer edition allowing customization by deploying the libraries on your own server or portal.   

Marketing page: https://www.esri.com/en-us/arcgis/products/arcgis-web-appbuilder/overview

Documentation tutorials and examples: https://doc.arcgis.com/en/web-appbuilder/

https://www.youtube.com/watch?v=nIYE-_Nhdec (2017 UC Presentation)
    
##    ArcGIS Dashboards

    ArcGIS Dashboards present location data using interactive data visualizations on a single screen. Typically Dashboards are meant for managing or communicating information rolled-up into graphs and simple maps. The famous COVID-19 dashboard really "put this on the map". Tailor dashboards to your audiences, giving them the ability to slice the data to get the answers they need. Dashboards are essential information products, like maps and apps, providing a critical component to your geospatial infrastructure.

https://www.esri.com/en-us/arcgis/products/arcgis-dashboards/resources

https://www.youtube.com/watch?v=zrxYWzSvJ6E (2018 UC Presentation)

##    Esri StoryMaps

    Create inspiring, immersive stories by combining text, interactive maps, and other multimedia content.

https://storymaps.arcgis.com/

https://www.youtube.com/watch?v=t_oFnIIJA-A (40 minute 2020 presentation)
    
##    Focused Configurable Apps

    Configurable apps help developers deploy maps and tools to their end-users, inside highly customized web applications fast, sometimes within minutes.

https://github.com/topics/4x-configurable-app

https://www.youtube.com/watch?v=PQjvUVwqic8 (4 minute UC presentation)

# Open Source solutions.

##    Leaflet JavaScript API

    Leaflet is a lightweight open-source JavaScript library for mobile-friendly interactive maps. It does not need any licenses to run and is simple to use, small (38k library download to your browser), and really cool!  You can learn more about Leaflet here:

https://leafletjs.com/index.html

    Esri created a "port" to allow leaflet to use ArcGIS Server services too. This is a much easier/simpler alternative to the Esri provided javascript APIs. 

https://esri.github.io/esri-leaflet/

    Review these items as they may be useful for your collaborative project and are great alternatives to Google and Mapbox's pay-per-map model, and the very expensive Esri suite of software. 
    Geoserver

##    Geoserver allows you to host and share GIS data over the web as OGC types, like WMS, WFS and WMTS. It is a good ArcGIS Server replacement (middle tier). Combined with a database like PostgresSQL/PostGIS and an API JavaScript library like Leaflet, it can be a complete solution comparable to ArcGIS Enterprise. 

http://geoserver.org/

https://youtu.be/7bbq3gWEXI8

https://youtu.be/Gjfb4cF_j8k

https://youtu.be/ym1b2NDDAQY

https://youtu.be/8lhwczAjCec
    
##    OpenStreetMap

    OpenStreetMap is a collaborative project to create a free editable map of the world. The geodata underlying the map is considered the primary output of the project.

https://www.openstreetmap.org/#map=3/71.34/-96.82
    
    
##    qField for Android Devices

    QField allows you to efficiently work on your GIS data outdoor. QField is based on QGIS. It is not a rebuild of QGIS it really does use QGIS libraries. The rendering engine is exactly the same as in QGIS for desktop and your project will therefore look exactly the same on your mobile device as it does on your computer.

    
https://qfield.org/


##    KoboToolbox

    KoboToolbox uses much of the same components as Survey123, except the data are stored in an internal MongoDB (NoSQL Database). There is a hosted (SaaS) version, as well you can deploy your own KoboToolbox to environments in a Docker container (like a VM, but simpler). This is an excellent alternative to Survey 123 and is truly open source. 

https://www.kobotoolbox.org/

# Mapbox API

    Create your own Mapbox Style

    Using Mapbox Studio, create and apply your own style to your required demo solutions. 

    This item will contribute to a bonus in Practical Lab 4. 
    Mapbox: Create a Mapbox account

Create your own Mapbox account: https://account.mapbox.com/auth/signup/

    Familiarize yourself with how to get your own access token. 
    Mapbox: Modify these Demos using your ArcGIS Server map service

    Mapbox is easy to use, even with limited programming knowledge. We can access your Luna or AWS ArcGIS Server published Canada map in multiple ways in Mapbox. Modify each of the following examples to use your own ArcGIS Server published (and started) service and place the result into your own Github or HTDOCS account.

    This first example "hacks" Mapbox into thinking a map return is WMS. In reality, this does not need the WMS capabilities enabled on your service, because the URL returns only a PNG image and mimics the functionality of WMS. Modify this example to use your published map service. Notice how your configured cartography is maintained in this example. That is because this exports just a "picture" of your map and displays it in the coordinate system used by Mapbox. 

https://shawnmflemingc.github.io/mapboxdemo.html

    The next example uses the GeoJSON export capability in a layer query request from ArcGIS Server and the ability for Mapbox to read and use GeoJSON as a layer. Because GeoJSON exports only the geometries, there is no cartography from your map service used--instead Mapbox has its own "painting" defined. First, modify the ArcGIS Server URL to use your own published Canada map service on Luna. Next, modify the query of the ArcGIS Service URL to return one or more provinces. Be sure to modify the example, as just showing "Ontario" as the example does will not be acceptable for the last checklist. 

https://shawnmflemingc.github.io/mapboxgeojson.html

    These modified examples are great ways to get your own map service on your own GitHub or HTDOCS account running. Feel free to give it a try!

    Projection Problems?

    If your Canada shows up in Africa likely your service is not in Web Mercator projection. By default the services were published how the data are stored, in PCS_Lambert_Conformal_Conic. Not sure? Check on the REST endpoint, see how your service was published on the MapService REST page under Spatial Reference. It will start with PROJCS["PCS_Lambert_Conformal_Conic if it was this case. To be compatible with Mapbox, it should have been Spatial Reference: 102100  (3857) . The map request for MapBox must therefore "reproject" your map into Web Mercator to work.

    This example does that:

https://shawnmflemingc.github.io/mapboxagsprojection.html

    NOTE: The portion {bbox-epsg-3857} MUST be exactly this in the URL/do not URL encode it. This is to specify the bounding box for each image request. This will be "replaced" by Mapbox whenever it makes a request, using the actual coordinates for the requested bounding box. 

# Vertigis Geocortex and Rolta's OnPoint

    Geocortex: Videos

    Geocortex Essentials is created by Vertigis, and is one of many products available in their "Geocortex" product line. Many organizations purchase Geocortex to add on to their ArcGIS Server because it is easy to deploy, maintain and configure. Think of it as an alternative to ArcGIS Online or ArcGIS Portal, where users interact with a "google maps" like interface that is easily configured by the sites' administrators.

    There are 2 main product series. 
        Geocortex Essentials 4
        Geocortex 5 Series products
    Geocortex Essentials 4 (For use with ArcGIS Server directly)

    This product predates ArcGIS Portal and ArcGIS Online. It is a purchased product meant for local/on premise installations only (there is not really a cloud option). Esri's focus on ArcGIS Online and Enterprise/Portal has moved many away from this version of the software, however there are still numerous examples using this. 

    For example:
        Federal Governments: Norway, Australia
        Most Canadian Provincial Governments: Alberta, Ontario, NWT, Quebec
        Many Canadian Municipal Governments: https://maps.brant.ca, https://maps.waterloo.ca, http://mapit.islandstrust.bc.ca/, https://maps.kelowna.ca/public/mapviewer/
        Internationally: London City, New York, Austin Texas, Belgium

    Plus about 400+ more "clients". 

    Watch this marketing overview of the product. It gives some ideas of what is possible, but is more high-level than what you'll need to figure how to make it work. Frequently when having a company try and sell you something they provide non-technical flashy content like this, which makes making technical decisions challenging. To get a true feel for this product by asking you to configure some items using step by step instructions (optional item). 

Marketing Demo: https://www.youtube.com/watch?v=nLtWz9iP3H0 (generic and has a lot of "buzz words" but still frames product scope)

    Note: Many municipal opportunities value Geocortex Essentials and 5 experience. To help you, I've negotiated an exclusive relationship with Vertigis to make the product available to you. 

    Explore more by watching at least the videos here and creating your own site (see the item in the Optional section of this weeks' checklist): 
        Introduction to Geocortex: https://www.youtube.com/watch?v=olp1q9bRuoU (6 minutes)
        Product Architecture Overview: http://www.youtube.com/watch?v=0iDtvIEiw7k (11 minutes)
        Optional: Browsing and Managing Sites: http://www.youtube.com/watch?v=fGZqyeyh__o (2 minutes)
        Optional: Rest Management tour: http://www.youtube.com/watch?v=vNyfOtRukcs (10 minutes)

    Questions related to this item may be asked as part of your next practical lab and final exam. 
    Geocortex: Take a look at this Demonstration Site for Local Government

    This demo site for Geocortex Essentials was created to show new users what could be completed. It is built with help from the Los Angeles government, and uses a version of their data. Give it a try and explore! 

https://gedemo.geocortex.com/Html5Viewer/index.html?viewer=Government

    This product, as configured, uses Map Services published in ArcGIS Server alone and does not need the full stack deployment of ArcGIS Enterprise to work. 

    Here is a list of Geocortex 5 demo sites:

https://gedemo.geocortex.com/GeocortexDemos/

    Geocortex 5 "versions" are integrated into ArcGIS Online and their configuration is stored in items. It requires ArcGIS Online or an ArcGIS Enterprise implementation to use it, and thus has been slow in its adoption. 

    Understanding what is possible using Geocortex may be tested on in your practical lab or final exam
    Geocortex: Create your own site - step by step

    Follow the instructions here to create your own Geocortex site on the server Luna. 

    Geocortex Intro.pdf
    Read and Explore: Rolta OnPoint

    Rolta's OnPoint product is another Canadian-born product that many municipalities have worked on. Formally Orion Technologies out of Richmond Hill, the company was bought by Rolta in the mid-2000's and since then has focused on large multinational companies with OnPoint, A few municipal clients still use it, including Kitchener Ontario, which was OnPoint's first client!

City of Kitchener: https://map.kitchener.ca/OnPointExt/WebPages/Disclaimer.aspx?ReturnUrl=%2fOnPointExt%2fWebPages%2fLanding%2fPublic.aspx

    This is another configurable "add on" to ArcGIS Server. Understanding solution possibilities is important for your final exam, which this contributes. 