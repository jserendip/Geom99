# James Serendip Development Log
tracking research and development time spent toward Geom99 Final Project for Team "Web Delta"
## Week 9-10
    This week's focus has been on the week 9 checklist - to go through various tools and options for 
    developing web maps, web apps, and custom web solutions applicable to Geom 99 final project for team 
    Web Delta, and also research for possible solutions for final collaborative project (Team Happy Puppies)

####    March 15 - Working through checklists
            Set up DuckDNS, SSL Certification
            Watch video on managing Portal from Map/Pro
##### Insights, Outcomes, ToDos, Time Spent and Resource Links
**Insights:** SSL Cert works but still shows security warnings (because of changing Duck DNS I guess)  
ArcGIS Pro ONLY ALLOWS 1 PORTAL open at a time!  Change in Project tab  
**Outcomes:** Completed DNS, certifaction, video  
**ToDOs:** runArcGIS Server on EC2  
**Time Spent:** 1.25 hours  
**Resource Links:** <https://www.duckdns.org/domains>  video: <https://youtu.be/KItDcnDQce0>  

####    March 16 - Working through week 9 checklist
            Watched 2 videos on Experience Builder
##### Insights, Outcomes, ToDos, Time Spent and Resource Links
**Insights:** like dashboard on steroids  
There is a LOT of back-end programming on this!  
**Outcomes:** Completed videos  
**ToDOs:**       
**Time Spent:** 1.25 hours  
**Resource Links:** video 1: <https://www.youtube.com/watch?v=pNrsd5naN7U>  video2: <https://www.youtube.com/watch?v=Vu6_pBa7zis>  

####    March 18 - Working through week 9 checklist
            Experimenting with Experience Builder
##### Insights, Outcomes, ToDos, Time Spent and Resource Links
**Insights:** some widget functionality not what it seems!  
Everything set through Properties panel on right, but some settings are tricky  
**Outcomes:** Created very basic experience builder template  
**ToDOs:** Test and expand capabilities of Experience Builder example  
**Time Spent:** 1 hours  
**Resource Links:** <https://experience.arcgis.com/experience/faa94141a36048dcbcb9bac5b83db5b0/>

####    March 19 - Working through week 9 checklist
            Expanding Experience Builder proof-of-concept
##### Insights, Outcomes, ToDos, Time Spent and Resource Links
**Insights:** widgets and functionality very keyed to data sources - need to be clear on what layers are where!  
**Outcomes:** Activated Map View, discovered Feature View widget (useful!)  
**ToDOs:** Feature View seems to be reseting initial map in Experience Builder example - explore  
**Time Spent:** 1 hours  
**Resource Links:** <https://account.mapbox.com/>


## Week 10-11
    Working through Experience Builder to determine if we want to use it for our project or switch to StoryMaps
    because of the difficulties and bugs we ahve encountered so far with Experience Builder.
####    March 22 - Working through week 9 checklist
            Create and Explore Mapbox account
##### Insights, Outcomes, ToDos, Time Spent and Resource Links
**Insights:** mapbox more programming/less GUI  - versitile, useful, but needs research to execute  
**Outcomes:** account created and some exploration  
**ToDOs:** create and embed a map using mapbox  
**Time Spent:** 0.5 hours  
**Resource Links:** <https://account.mapbox.com/>  

####    March 23 - Working through week 9 checklist
            Create and Explore Leaflet account
##### Insights, Outcomes, ToDos, Time Spent and Resource Links
**Insights:** very API-ish  
**Outcomes:** account created and some exploration  
**ToDOs:** create and embed a map using leaflet - need more exploration of this one  
**Time Spent:** 0.25 hours  
**Resource Links:** <https://esri.github.io/esri-leaflet/>

####    March 24 - Working through week 9 checklist
            Research and experiment with ESRI WebAppBuilder
##### Insights, Outcomes, ToDos, Time Spent and Resource Links
**Insights:**  working this after working with experience builder I see that this is maybe slightly easier, but way less customizable  
**Outcomes:**   Created WebApp example called Test  
**ToDOs:**       
**Time Spent:**  0.5 hours  
**Resource Links:** <https://fleming.maps.arcgis.com/apps/webappviewer/index.html?id=06ae26881a784cdfb79f61fa51c12216>  

## Week 11-12
####    March 25 - Working through week 9 checklist
            Web Delta/Happy Puppies team meeting to discuss use of Experience Builder
##### Insights, Outcomes, ToDos, Time Spent and Resource Links
**Insights:**  there are worrisome bugs in Experience Builder, but also useful functionality, so it's a trade off.  We all found the interactivity of the widgets and data challenging to manage, and were particularly unsettled by the way the main map view keeps adjusting to selections in feature views.  When Shawn met with us, suggested to just use the Views to fix this!  
**Outcomes:**   we are all excited to try Experience Builder, but nervous that it may be more difficult that it's worth for us  
**ToDOs:**     Experiment with content for the remaining 2 Views in Experience Builder  
**Time Spent:**  1 hours  
**Resource Links:** 

####    March 26 - Experience Builder Exploration
            After meeting with Shawn, we have decided to try more to make Experience Builder work for us  
##### Insights, Outcomes, ToDos, Time Spent and Resource Links
**Insights:** This tool is cumbersome and buggy, but very versitile!  
**Outcomes:** 1) Use Different views to be able to show correct initial view of map  
since the Feature Views widget will cause a selection to zoom the map initially regardless of  
initial map settings.  This works great and helps me understand different ways to use the views feature.  
2) The text for the Views menu is NOT EDITABLE in the widget properties!  Only in the page menu.  
3) The Filter widget is amazing.  Added a View 2 for visualizing Stream Order using a series of filters  
for the user to select streams of order 1, 1&2, 1&2&3, or greater than3.  Very cool!  
**ToDOs:** create additional content for Views 1 and 2  
**Time Spent:** 0.75 hours  
**Resource Links:** <https://experience.arcgis.com/experience/faa94141a36048dcbcb9bac5b83db5b0/>  

                      
####    March 29 - Constructing additional Views in Experience Builder
            I have been working with a template in Experience Builder that uses 3 views,
            and I have found that I can use the views not only to sort my data presenatation, but also to highlight thematic concepts.
            Created stream order dynamic segmentatin map in ArcGIS Online Map Viewer from base stream map.
            View 2 is now set to allow the user to filter the streams visible on the main map by Strahler Stream Order
              
##### Insights, Outcomes, ToDos, Time Spent and Resource Links
**Insights:** User-selected filters allow a degree of user-interactivity that can be helpful for our purposes - to be able to select streams by order.  
**Outcomes:** 1) View 1 now has the basic map of our study area in the Rice Lake Plains along with an inset that shows stream order by dynamic segmentation.  
2) I included our Team Logo with a link to a shell URL for our team.  
3) View 2 now shows the Streams in our area.  There is a series of optional filters so that the user can choose to view only 1st order streams, only 1st & 2nd order, 1st, 2nd & 3rd order, or only streams above 3rd order.  
**ToDOs:** Create content for View 3, perhaps focusing on other waterbodies and/or nature conservation?    
**Time Spent:** 1.25 hours    
**Resource Links:**stream order web map: <https://fleming.maps.arcgis.com/home/webmap/viewer.html?webmap=a623ec91c98440539270c9af3b80428f>

####    March 30 - Accessing SDE GDB on Virtual Server
            Kevin Rabjohn created an Enterprise geodatabase for our collab group to use for our data handling on the Fleming virtual server, but it would not give us permission to register features as versioned.  A new GDB was constructed for us which did work fine. 
##### Insights, Outcomes, ToDos, Time Spent and Resource Links
**Insights:** There are many layers of complexity to permissions in Enterprise!  Kevin was not able to figure out why we could not register our features classes as versioned. Talking to Rahul, it seems it may be his attempt to give us too many privileges that then ironically interfered with the privileges we needed.   
**Outcomes:** Kevin created a new GDB for us that works correctly, with a new user code. Kristine already uploaded most of our current data.  
**ToDOs:** Start creating individual users and user versions so we can begin to explore the data.    
**Time Spent:** 0.5 hours    
**Resource Links:**

## Week 12-13

####    March 31 - Meeting with other Experience Builder teams in Geom 99
            Team Web Delta met with the other teams in Geom99 that are using Experience builder to share ideas and inspiration, challenges and difficulties.  
##### Insights, Outcomes, ToDos, Time Spent and Resource Links
**Insights:** Experience Builder can make a huge range of looks and functionality, so we need to really examine how we want to structure our project.  Some of the other teams showed prototypes using scrolling pages, beautiful graphics, other templates... a lot of it looked really good, but lacked the level of functionality of our current prototype.  
**Outcomes:** We decided we would all try out some different templates to explore other looks.  We still want to have a shell page in github to hold our AGOL content, but want to make that content also have an essentially "stand alone page" look.    
**ToDOs:** Create another Experience Builder prototype with a different look/template.    
**Time Spent:** 1 hour    
**Resource Links:**

####    April 1 - Researching Stream Order Definitions
            Since for this project Team Web Delta is doing a potential mock-up for our collab project (for Team Happy Puppies) which involves making a dynamic map of headwaters, it is important to understand the definition of headwaters and different systems for classifying and identifying headwater streams.  Toward this end, I read several papers on Headwaters, most usefully from Ontario Headwaters Institute (OHI) and Toronto and Region Conservation Authority (TRCA) - see links below.  
##### Insights, Outcomes, ToDos, Time Spent and Resource Links
**Insights:** Most sources consider headwaters to be Strahler Order 1 or 2, but some use 1,2 & 3, and there is even talk of "zero order" headwaters that are more ephemeral swales.  
**Outcomes:** We will discuss this with our client to see if they have a specific working definition we must adopt, otherwise will go with defining headwaters as Order 1 and 2.    
**ToDOs:** Discuss in client meeting April 7   
**Time Spent:** 1.5 hours    
**Resource Links:** Ontario Headwaters Institute Backgrounder: <https://ontarioheadwaters.ca/watershedmanagement/>  Toronto and Region Conservation Authority: <https://trca.ca>

####    April 5 - Started new Experience Builder Prototype
            To explore possible layouts and looks for our project I begin a second Experience Builder, this time using the "Pocket" template.  
##### Insights, Outcomes, ToDos, Time Spent and Resource Links
**Insights:** The "pocket" template is very map-centric.  It focuses mostly on the use of bookmarks to highlight locations/objects on the map.  
**Outcomes:** I am finally starting to understand how bookmarks work!  Also, learned that the display size settings are NOT just to "view" how it will look on different displays, but that you can set particular views to work in particular displays.    
**ToDOs:** Flesh out this pocket template prototype and see what it can do!   
**Time Spent:** 0.75 hours    
**Resource Links:**

####    April 6 - Meetin with Team Members to discuss strategies prior to client meeting
            This meeting was largely to prepare for our client meeting April 7, but we also focused on the Geom99 project/dynamic map deliverable for collab.  We talked about what we have found so far with Experience Builder.  Kate is still getting the feel of Experience Builder overall, and Kristine is digging in to the actual developers side a bit.  
##### Insights, Outcomes, ToDos, Time Spent and Resource Links
**Insights:** We will likely want to use a little of the developers functionality at some point, probably more for our actual final collab deliverable.  I am finding the widgets and templates just in their COTS form all seem to get clumsy in their interactions and settings.  I also am learning that I do NOT have the best visual design eye... It is hard for me to tell what looks good or bad on a page until it is done, so I really benefit from looking at the work of others with more design sense!  I am seeking out more Experience Builder Examples. 
**Outcomes:** I am finally starting to understand how bookmarks work!  Also, learned that the display size settings are NOT just to "view" how it will look on different displays, but that you can set particular views to work in particular displays.    
**ToDOs:** Keep finding new experience examples and trying other templates and options   
**Time Spent:** 0.5 hours    
**Resource Links:** Good example of Experience Builder with similar level of functionality to what we will want: <https://experience.arcgis.com/experience/2f68463e81294f37a68c8ef442e85b29?data_id=dataSource_3-Current_Dev_Proj_Read_Only_1586%3A34>

####    April 7 - Meeting with Team Members and Collab client NCC
            We met with our collab clients to discuss headwater definition, methodology for mapping, and specifics of deliverables, especially the dynamic map which is the focus of our geom99 project.  Demo'ed current prototype Experience Builder for clients and it really inspired them and started discussion which got us to a very different understanding of what they really want!  
##### Insights, Outcomes, ToDos, Time Spent and Resource Links
**Insights:** We had been operating under the premise that our collab clients' primary interest was in a static map of headwaters, but after demo'ing the Experience Builder they really got excited and as we questioned and dicussed further we realize they intend for the dynamic map to really be the main functional deliverable, and the static map is more of a display piece.  So this puts more importance on our geom99 work!
**Outcomes:** Client loved the look of the dark basemap with streams showing in different colors by stream order for the static map as a large "poster".  They are also interested in the idea of making streams "clickable" to highlight their downstream progeny, and also filterable by water quality data.   
**ToDOs:** Find Cold Water data, get Scoop2018 tiles from Tessa, explore further filtering options in Experience Builder   
**Time Spent:** 1 hours    
**Resource Links:** Possible source for water quality data: <https://data.ontario.ca/dataset/provincial-stream-water-quality-monitoring-network>


## Week 13-14

####    April 7 - Explore settings for Lists in Experience Builder in new jewlreybox template
            Deep dive into the list widget and text widget within the list - worked on filtering data and creating new data views from filtered data. 
##### Insights, Outcomes, ToDos, Time Spent and Resource Links
**Insights:** Created custom data view to filter out only named headwaters greater than 750 meters.  Discovered how to set dynamic text to label list items from data source field - gives 3 options: auto-populate, Selected Features, data source - MUST use data source for it to be truly dynamic!  other options populate entire list with the value of selected field in first feature. 
**Outcomes:** Created a list that is ONLY named streams order 1 or 2 and longer than 750 meters with each item in the list labelled by name and stream order with alternate style for selected list item.   
**ToDOs:** incoporate this functionality in a more cohesive template   
**Time Spent:** 1.75 hours    
**Resource Links:** <https://experience.arcgis.com/experience/097faec5dc794430aab68a8404bf4275>

####    April 8 - Team meeting going over Experience Builder prototypes
            Showed my team what I learned about filtering lists and dynamic text.  Team members had designed experiences that have a more cohesive website-ish look.  These are good for this Geom99 project!  We decided I should continue to focus on learning functionality and they will continue to work on design and look.  Began working on another experience sample to explore using bookmarks to switch between map layer views.  
##### Insights, Outcomes, ToDos, Time Spent and Resource Links
**Insights:** I'm still having trouble using bookmarks!  It seems that they are for zooming, seelcting, highlighting and annotating map sections (or other content) but not for switching to different data.
**Outcomes:** Still looking for the best way to have user-controlled switching between map content (stream orders) that looks consistent and is easy to use.   
**ToDOs:** Work more with views or multiple maps.   
**Time Spent:** 0.5 hours    
**Resource Links:**

####    April 9 - Team meeting w/Shawn and follow-up work with Hub
            Going over our status in class, Shawn suggested we look into using Hub instead of HTML on Github for holding our content for this project.  We all liked the idea of it and the look, so began playing around with Hub layouts.  
##### Insights, Outcomes, ToDos, Time Spent and Resource Links
**Insights:** Hub is basically a flexible template that easily constructs a website-ish look from content that includes ESRI-generated and housed content (AGOL stuff).  Seems simpler to use than Experience builder, but less functionality, just easier design.
**Outcomes:** We all felt that Hub was worth pursuing as the overall container for our Geom99 project, though it will not be used for our Collab project deliverable since they are looking strictly for functionality and so Hub would not add to that, just create another layer for the user to work through.  We all begain exploring Hub designs.   
**ToDOs:** Start integrating some of the Experience pieces into Hub.   
**Time Spent:** 1 hours    
**Resource Links:**

####    April 12 - Created multiple web maps to consume in Experience Builder or Hub
            To give me more options for displaying different data in different way, I created multiple separate web maps with just certain categories of stream order, publishing them to AGOL from Pro. 
##### Insights, Outcomes, ToDos, Time Spent and Resource Links
**Insights:** Because Hub lacks some of the functionality of Experience Builder, we can make up for that by doing more data preprocessing in Pro and just having more individual resources in AGOL to drawn from.
**Outcomes:** Created a menu in Hub to view stream order maps by stream order.  I did not get at all a complete Hub built, and then there was a problem with the account/access-token, and it would not save, so have to redo it, but at least figured out a way to display the content I want.   
**ToDOs:** In lab this week the team will all work on combining our various pieces in a cohesive Hub.   
**Time Spent:** 1.25 hours    
**Resource Links:** no link since there was a problem and could not save.

####    April 13 - Team Meeting with Advisor
            Team met briefly with Paige and filled her in on the developments from our client meeting previous week.  She was suprised to hear the direction the client's interest has taken, as she too thought they were mostly interested in the static map, so agrees with the emphasis for Collab being more on the dynamic app.  We discussed concerns about functionality of clickable streams that select downstream segments, but since this can be accomplished with filters in Experience Builder, I am confident we can find a way to make it more "point-and-click". 
##### Insights, Outcomes, ToDos, Time Spent and Resource Links
**Insights:** I might need to learn how to modify the widget geojson code in the jimu-library.
**Outcomes:** Began modifying some old hydro data to use for test case, since our current stream data does not contain "Nextdown_ID" info.   
**ToDOs:** Watch more Experience Builder for Developers demos and tutorials for modifying widget code, bring Nextdown_Id data into Experience.   
**Time Spent:** 0.5 hours    
**Resource Links:**

## Week 14-15


