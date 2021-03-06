# Geom99
Fleming College Geom99 repository of examples and guides for google map APIs
## Google MyMaps Tutorial
Due Jan 25, 2021 12:00 PM

Create Please complete the full exercise provided by Google. With the final map, can you embed this into a website? Create a visually pleasing yet simple "shark spotters" page that references your created map. 

https://www.google.com/earth/outreach/learn/visualize-your-data-on-a-custom-map-using-google-my-maps/

Issues with embedding it using an iframe? Be sure you're using the "embed" link. See an example of the solution here: https://shawnmflemingc.github.io/geom99/mymapsiframe.html

My Shark Sightings & Beaches map is found here: https://jserendip.github.io/Geom99/Gmaps/sharksighting.html

## Google Maps as a Development Platform
Due Jan 25, 2021 12:00 PM

Read Understand the three pillars of Google Maps as a platform: Maps, Routes and Places. 

https://cloud.google.com/maps-platform/ (using the "getting started" button does all this: https://developers.google.com/maps/gmp-get-started)

Get started and be sure to enable keys for all the three environments. Then try to create an introductory example for each of the "getting started" items

(You can find most of the samples and more directly on GitHub at this address: https://github.com/googlemaps/js-samples)
### 1. JavaScript API (HTML Interactive Map):

Create Create the Overview (hello world) example and host in GitHub: https://developers.google.com/maps/documentation/javascript/tutorial

My "Hello World" Javascript API basic map: https://jserendip.github.io/Geom99/Gmaps/helloworld.html

### 2. Directions API (JSON Return)

Create Follow the Get Started instructions for directions and form a URL to provide route directions in JSON: https://developers.google.com/maps/documentation/directions/start

Note:  Due to CORS you cannot "use" this result client-side in JavaScript or target an iFrame. This url generates only a JSON response, not a webpage -- that is all  you need -- put your URL into an HTML document and share an example "JSON" result from that URL. Make that HTML link an A tag so it can be clicked and target a new tab. 

If not creating a webpage to run your URL, at least document it using the GitHub MD file / markdown language (https://guides.github.com/features/mastering-markdown/). Be sure you include BOTH your URL and the valid RESPONSE in your MD or HTML webpage documentation. 

#### My html page containing this API call is: https://jserendip.github.io/Geom99/Gmaps/directionsJSON.html

#### My JSON Response code is shown below:
```json
{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJa147K9HX3IAR-lwiGIQv9i4",
         "types" : [
            "amusement_park",
            "establishment",
            "point_of_interest",
            "tourist_attraction"
         ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJzzgyJU--woARcZqceSdQ3dM",
         "types" : [
            "amusement_park",
            "establishment",
            "point_of_interest",
            "tourist_attraction"
         ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 34.1358593,
               "lng" : -117.9221251
            },
            "southwest" : {
               "lat" : 33.8160535,
               "lng" : -118.3516953
            }
         },
         "copyrights" : "Map data ©2021",
         "legs" : [
            {
               "distance" : {
                  "text" : "34.9 mi",
                  "value" : 56098
               },
               "duration" : {
                  "text" : "38 mins",
                  "value" : 2274
               },
               "end_address" : "100 Universal City Plaza, Universal City, CA 91608, USA",
               "end_location" : {
                  "lat" : 34.1358593,
                  "lng" : -118.3511633
               },
               "start_address" : "1313 Disneyland Dr, Anaheim, CA 92802, USA",
               "start_location" : {
                  "lat" : 33.8160535,
                  "lng" : -117.9224058
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.3 mi",
                        "value" : 464
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 50
                     },
                     "end_location" : {
                        "lat" : 33.8201231,
                        "lng" : -117.9228153
                     },
                     "html_instructions" : "Head \u003cb\u003enorth\u003c/b\u003e toward \u003cb\u003eDisneyland Dr\u003c/b\u003e",
                     "polyline" : {
                        "points" : "iukmE`vvnUAAUGOEWGYGe@Ia@GQAQAQAQAQ?G?[??@c@?M@U@_@@C?_@D]HqCp@_@HC@_ATC@K@]JKDID[DG?EA"
                     },
                     "start_location" : {
                        "lat" : 33.8160535,
                        "lng" : -117.9224058
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "256 ft",
                        "value" : 78
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 9
                     },
                     "end_location" : {
                        "lat" : 33.8207878,
                        "lng" : -117.9230963
                     },
                     "html_instructions" : "Continue straight onto \u003cb\u003eDisneyland Dr\u003c/b\u003e",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "wnlmErxvnUUJc@LEBeAX"
                     },
                     "start_location" : {
                        "lat" : 33.8201231,
                        "lng" : -117.9228153
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.6 mi",
                        "value" : 4183
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 150
                     },
                     "end_location" : {
                        "lat" : 33.8437993,
                        "lng" : -117.9557998
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e to merge onto \u003cb\u003eI-5 N\u003c/b\u003e toward \u003cb\u003eLos Angeles\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "}rlmEjzvnUi@MICEASIcA]{@[C?SGSGMEMEC?KCSAEAMAO?E?]@C?E@E?MBE@I@IBKBA@UJE@EBIDGDKF{AtAs@l@y@r@y@r@_At@WTs@l@qAjA_@\\]p@}ApAg@b@iAdA}BbCSTYXw@z@[ZyB`Cs@v@ST]^CDyBdCw@x@qBtB}@~@_AbA{@|@s@x@KLEBEDSPGF_BhCa@r@Wh@Wf@Sf@c@jAOb@K^ITW`AMd@_@xAWnAU`Bm@jEi@`Eu@hFOv@GXWlAMh@e@|AM`@M^KX{@vBuAzCSd@aGrMwDvISd@aEjJgB|DsBtEaF~KMVm@rAWn@i@jAg@fA[p@[l@aAdBe@x@"
                     },
                     "start_location" : {
                        "lat" : 33.8207878,
                        "lng" : -117.9230963
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "4.8 mi",
                        "value" : 7776
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 263
                     },
                     "end_location" : {
                        "lat" : 33.8823716,
                        "lng" : -118.0255065
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eI-5 N\u003c/b\u003e",
                     "maneuver" : "keep-left",
                     "polyline" : {
                        "points" : "wbqmEvf}nUm@fA}@|AQZYd@[h@U`@QZ[l@c@|@_@v@{@rBUn@m@~AEHs@lBk@|AsB~EaC~F_A`C_@~@Uf@[t@aChGQf@{CjHyAjDiAhCoAxCmDhIkApCkAdCEFoA|B_@j@Yf@gA~Aa@l@g@p@W^a@j@GHgAtAu@dAiCpDY\\aB|Be@z@?@A@IPKRA@?@GJSd@_@~@Qh@Qh@WdAADAFGZYrA[xAId@GREVSbAU~@k@vB[lACF_AzE?@YlAMl@ADWbAOn@}@hCQh@k@~AcB~DYp@Wh@INgAzBc@x@QZgBzC_BpC[f@c@t@U^KPqB`ESb@ABQ^g@fASb@Sf@c@`AoAtCe@fAaBtDg@hAy@jBsAbD}@nBOZKV]v@oArCSb@Q`@?@Sb@aBpDi@hAy@lBKVsAnCABGHGNINEJCJGJGRc@`A[t@c@`AoAlCmBjEMZ]t@_@z@w@bBe@|@c@r@OTOTA@SZCBc@r@a@h@g@n@e@j@Y^QRkAfAsBlBoBfCi@v@W^g@v@[d@s@jACDa@n@IJABSZ{@xAmAzB_CrFeAnCYz@Wz@ENKXoAzDeB|E]`ACHELITGNYx@ENKTkApCe@fAOZ}@rB{@lBQb@Yp@}@rBaAzBIN]x@Sb@u@fBiBdE"
                     },
                     "start_location" : {
                        "lat" : 33.8437993,
                        "lng" : -117.9557998
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "12.6 mi",
                        "value" : 20356
                     },
                     "duration" : {
                        "text" : "14 mins",
                        "value" : 816
                     },
                     "end_location" : {
                        "lat" : 34.0151967,
                        "lng" : -118.1701571
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eI-5 N\u003c/b\u003e",
                     "maneuver" : "keep-left",
                     "polyline" : {
                        "points" : "ysxmElzjoUsAdDiAtB_BxCaAfB}AvCUd@w@bBQ^O\\y@tBa@fAIVq@zAgA~BGJgBjD[f@GLELIREJsA`Dc@bASj@y@rBa@~@aA|B[x@e@hA]z@a@bAsAhD?@uCbHSd@O`@g@jAABm@vAsA`DmB`FIPwC~GiF|Ky@`BGJmBvD{AzCsFxKQ\\yC`Gw@fBoDzHu@|A}B~EqCtG{@nB_@x@Q`@[p@KTKToApCu@zAaAdBc@r@a@r@kAnBmAnBaB~BW\\qAdBi@p@m@r@EDgBnBaChCmChCEBeAfAuCrCgAdAKJmBlBgBbBoArAwA~AyAfBm@x@c@p@sAvBqAhCwAnCu@bBu@dBq@zAq@vAi@dAs@pAs@hAg@p@iBnC_BzBcApA{A`B{A`Bk@h@o@j@cAt@]X]XcDvBw@d@w@d@}CnBi@^y@f@w@d@KFIFOJOJEDQJEB[PsDzBgBhA{ClB{@j@YP}HzE_@TyA~@A?{BtAA@[RA?]T}BtA]RA@}@h@}BrAwA|@{BvAi@Xg@Ze@XaBlAwCpB{@l@kD`CgA|@_@ReCxAoG`EcAn@SLm@^wAz@a@Vu@`@kF`D_@R?@wBlAGBoBjA}BrAKFGDu@b@k@Xi@XWNcB`Aa@VoDvBwCbBcAn@}@h@sBhAe@Ve@V[RMF_@Ru@b@GDm@\\yAz@SJc@VeAn@q@`@}A|@sBjA}@h@]TcDjBkAp@cAl@ID}@h@wCdB_@T_@T_Ap@y@n@g@b@i@f@_@^a@`@UXm@r@_@b@a@j@QVwAvBk@|@A@W^cA~AeA`B{BhDgAbBg@t@uAxBg@t@uCnEgA`Bc@p@a@p@s@fAY`@oCdE}@tASZw@lAiIhMW^uBbDW^gAdBSXSZg@n@MPEDe@j@_@^[\\kAdAe@\\UNOLs@d@CB}@j@sAr@e@TC@MD[Lq@Vs@R_B`@iE|@WFqDr@sAZs@NWDcB^ODc@HcB\\C@]HaAP}A\\c@Jg@JgAZi@Nu@XiAd@gAh@eAl@MHKFe@TOHc@Xe@\\g@ZONa@ZcAr@_C~A[PeAr@SNyB|A_@\\cAz@qAnAoApA_A|@{A|AYX_A~@}@|@eAbAs@t@uBtBoBpBmAlA{AzAm@j@YZ]\\kAhAeAhAg@f@KLOPs@|@a@n@QXq@fA{@vAy@tA]l@[b@w@nA]b@c@h@YZ[\\w@x@WVCBKJA@MN_@\\s@p@wAvAoAnA}@x@y@v@A@eB~Ao@l@cA`Ai@h@aIrHiJzIONoBjB_@Zc@`@ED]Za@^a@^ONi@b@u@j@q@f@cAj@IDYPo@^w@\\w@b@y@d@ID]PA@g@\\_Ap@w@n@EDeBbBwCpCmBbB}AxA_CvB}AvAu@r@cA`AoAtAgEdFgBtBY\\aCrCwAjBa@r@[d@i@|@S^Wf@g@`AYj@o@fAS\\QVg@n@[b@_@d@c@d@i@h@UTs@l@uBhBw@r@OLED]\\m@n@m@n@k@v@a@l@[h@s@nAi@pAeAxCO^IPWt@Od@MZCFy@dCw@xBOb@cCbHcAtCaAvCWbAm@pCy@lE"
                     },
                     "start_location" : {
                        "lat" : 33.8823716,
                        "lng" : -118.0255065
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.2 mi",
                        "value" : 3574
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 144
                     },
                     "end_location" : {
                        "lat" : 34.0256221,
                        "lng" : -118.2059515
                     },
                     "html_instructions" : "Keep \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eI-5 N\u003c/b\u003e",
                     "maneuver" : "keep-right",
                     "polyline" : {
                        "points" : "_rrnEnbgpUq@rC_@bAYp@KVg@dAq@pAOXIPA@A@Ud@MXABEJGNCFAB[t@ADADi@~ASl@EPITWt@eAzC_AvCkCrHa@hA?@A?ENs@lBe@vAYbAK`@ABU~@CLMt@m@vDMrAMrA?@OtDC`G?bIBpK@lB?nE?rEA`D?@Ct@EjAC`@C`@Gt@MrAE^Ih@Mz@QfAKh@Mf@Qt@Of@W|@Sp@wBpGiAfD{@jCQf@Od@q@pBOf@eBdFAFaB|EaBfF}AvE_@hAMb@_@pA[lAELI\\M`@"
                     },
                     "start_location" : {
                        "lat" : 34.0151967,
                        "lng" : -118.1701571
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "11.7 mi",
                        "value" : 18764
                     },
                     "duration" : {
                        "text" : "13 mins",
                        "value" : 774
                     },
                     "end_location" : {
                        "lat" : 34.1291624,
                        "lng" : -118.3472425
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e at the fork to continue on \u003cb\u003eUS-101 N\u003c/b\u003e, follow signs for \u003cb\u003eLos Angeles N\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCivic Center\u003c/b\u003e",
                     "maneuver" : "fork-left",
                     "polyline" : {
                        "points" : "cstnEdbnpU?b@CPCNg@xBW`AMf@Od@Ut@cArCmAnDKXIXSj@o@lBQd@_CzGwAfEIPM\\_@hA[~@_AnCe@vAi@zACDWn@a@dAWp@u@fBO\\S`@]p@IPCDGLMTOZ]j@]h@QZc@j@W\\UZe@j@KNGDABC@C@SHiAhAA?EDw@x@[Zs@h@m@`@]TKDQLQF[NEBSJE@KDMDiAXC@]JWDg@FOB]Dy@DU?_@@u@As@EoBWy@Gu@Ek@?GAW?_@@[BmAFy@Fa@@U@a@?W?a@Aa@CC?]C]Cu@KsB[oC]}CU]Ak@Ae@?wA@iB@oC@k@?}AF]@K?aAHS@k@Di@Hm@Fm@JyAXi@L_Bb@C@_A\\c@PsAh@UHeAh@_@L]Nc@Pc@Pe@R}@\\{An@WNUNA?ML_@XMNIJQRQVGJABIJQ^[z@A??BEJOd@CLAHCJAHCP?HCNAPARAb@Er@?HAF?DAJ?DADG^AJC^AFATCJ?DAJOnAU~BKhAEZC`@CNMrAKpAQzBMtAOzBCRGbAAJK|ACRAT?TCv@ARCVEZIdAGbA?BCZEbACj@CdAAz@Bv@@J@PDbA?j@At@Ab@C\\Gp@CNGZG\\I^GPCJUl@Wn@CHCDIPOZOVa@v@_@n@MVS\\QZGLYh@S^QZGJGJIPKPGJmA|Bk@fA_@p@k@dAS`@o@jA]n@QZ]n@_@p@KNs@lAMRKP]h@w@pAm@v@U\\CBUXCDSVmAzAST_@`@i@h@g@d@g@b@UPURSPA@eBvAOLiAz@k@d@eBtACDi@b@GD]XEDUPURGD_@ZYXSRONY\\QTY`@UZW^g@x@]h@GHq@dASXW`@[`@S\\e@p@w@lAINe@p@U`@m@|@A@cA~Aa@p@OXg@`AMXYl@Q`@O\\Wr@O^GPGR[~@ELMd@?@K\\_@tA?B[nAi@tBa@zAcAbE_@xAWdAABu@zCCD[nAK`@ADe@jBMf@Mf@Mf@YhAQj@Oh@q@vB[x@Yx@]dAc@nAa@nAADc@jA]fAABQd@a@jACLYv@KX]jAY~@_@fAAHGNGTADyAvEc@jAGPIRu@jBg@lAc@fAM^K\\Od@m@nBa@|AYdAKb@Mj@ET_@lBw@dE]~Au@~Dq@rDWlAUlACHAJMn@I`@I`@If@YjB]`CO`A?@Kr@?DCP_@nCm@~DQpAAJQdACTETc@fDMjAShBKlACPGh@Ij@Ij@Mx@[hBId@Ot@c@hBCJMj@Qj@c@lAKZUj@CDO^[p@Yr@CDSb@S`@MZEJe@fAYn@eAhCO^}@dC}@`Cm@dBQd@y@|BsArDSh@g@rAEHSb@_@x@?Ba@t@KRSb@Wd@CD]n@c@x@o@bAe@t@c@t@_@l@ILILABMTKPMPqBfD{AbCu@hAOVmAjBQTILg@l@g@n@i@f@k@j@k@d@e@^w@n@]T{@f@]TC@wAt@iExB]RA?}@d@[NCBq@\\k@XUN[P]To@d@URa@`@i@h@WVc@n@QTQVMP_@n@i@`AEJAB]l@o@lA_AfBc@x@eAjBg@~@m@dAq@`AILORg@r@e@l@QREFa@^_@^KHYV[Tq@h@YPe@`@_Ah@EDwAt@k@VoAn@}GhDyAt@a@Pe@Vg@Tu@^s@b@]T]X]VSRURYZg@l@UVOTU\\g@~@i@fA]|@Y~@g@zBG\\Mv@E`@E\\Gx@A@?RCXC|@A^?h@?^?TA^Av@?F?Z?~@Cn@?@A`@Cb@G|@ALCRE\\G\\CRABEVEPAHK`@K`@Oj@i@xAQ^Wj@Wh@]l@u@vAu@vAOZEFU`@]r@[r@{@`BcDvGu@zAkAzBm@lAQXkA`Cg@|@[n@[j@KL[f@W\\EFY^[^c@b@GFCD]XMJm@f@w@h@w@`@y@^w@VgAZw@Rs@NmBd@eE`Ac@J_Ez@uBb@}AX{@NsB\\sAZwAf@iA`@kAd@gAh@cAl@aAj@gAv@{@n@cAx@o@j@y@x@s@z@i@n@m@t@]`@kB~BSR{@jAcAlA[^UZC@[`@SVA@WZe@f@g@f@ONi@d@C@EDOJe@\\E@ABu@d@GDA?gB`ASL[RYRWPQLQL_@\\MLQPg@h@gBhBCDIDOPGFOPONKLGDw@x@_A~@"
                     },
                     "start_location" : {
                        "lat" : 34.0256221,
                        "lng" : -118.2059515
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 mi",
                        "value" : 222
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 12
                     },
                     "end_location" : {
                        "lat" : 34.1307998,
                        "lng" : -118.3485738
                     },
                     "html_instructions" : "Take exit \u003cb\u003e11B\u003c/b\u003e toward \u003cb\u003eUniversal Studios Bl\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "gzhoEfuiqUWDE@y@r@MJURYXA?IHe@`@]ZUTKHGHMHOLCBUD"
                     },
                     "start_location" : {
                        "lat" : 34.1291624,
                        "lng" : -118.3472425
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 mi",
                        "value" : 447
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 30
                     },
                     "end_location" : {
                        "lat" : 34.1338819,
                        "lng" : -118.3515888
                     },
                     "html_instructions" : "Merge onto \u003cb\u003eW.C. Fields Dr\u003c/b\u003e",
                     "maneuver" : "merge",
                     "polyline" : {
                        "points" : "odioEp}iqUMLSLYNEBYNe@Xk@^]T]TQLMH_@Tm@l@[b@U\\S\\CDQZGLKNGLGFCFEDCBCBCBC@EDEBEBC@EDCBEBEBCB?@CBC@CBEFCBCDEDEFINUd@"
                     },
                     "start_location" : {
                        "lat" : 34.1307998,
                        "lng" : -118.3485738
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 mi",
                        "value" : 234
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 26
                     },
                     "end_location" : {
                        "lat" : 34.1358593,
                        "lng" : -118.3511633
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eUniversal Studios Blvd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the right\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "wwioElpjqUQNA@A@A?A@C?C?A?A?A?C?CAA?CAAAA??AA?CAEAC?A?A?A?A?A?A?OQCAAAECUMGCGCECGCGCICICICGAECKACAGAIAGAGAG?IAQAMAI?IAI?K?I@O@IA"
                     },
                     "start_location" : {
                        "lat" : 34.1338819,
                        "lng" : -118.3515888
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "iukmE`vvnUsDs@kBCgBDsE`AgD|@_ANi@PeAXi@MOEwAg@gBk@cBUqAJkAf@{KlJqBhB]p@}ApAqBhBqCxCgFrFiBrB}O~Pg@b@qDnGsAvDoAvEeC~PeBhKoAhEqDrI{a@h_AwCvG_D~FwF|JuCxGsCtH{Op`@{Udj@qEpHcCjDoGvIaDxEu@|A{AxEe@|Bs@jDqBhIuCzMoArDoC~GcCfF_JrOmG~MqVzj@}I~RiFjLaDpGgDzE}CfDsBlBoBfCaAvA{BnDaAzAiCtEeEbKcA`DiGrQuS~e@}CzGaD`G}D`IuBrFiFrKeEtJsJ~UeJvTwBrFaK|TkG`MwM`XuNn[gHvOsE|HyGrJeEzE{I~IwIrIiJ~JqAjBeD`GuFtLcExHuHnKsGxGcH`F_MxHuJdGaa@tV{JbGgItFoI`GmNxIaRzKkJnFy]lSyb@zVyDlCsClCeC|CwCnEkOtU_QzWwSv[oAbBmDnDkAz@iEhCsAj@eBj@iH~AqIfBoDt@yLlCqFxBeCtAwJ|GoFrDeGzFcPbPqOtOwBdCaDhFkDvF{AhBkCpCem@lk@{FbFyCjByEfCqAv@cFjEcNfMgHbHkMlO_EbGmBtD}BlDiCxCwF`Fs@p@iDdEoAxBoBjFaAlC}Kx[qDvPmBrEsB`EaFtNoIlV}@hD_AzFk@~I?v]?rTMdD_@jEu@vEgAbEqGvRoKz[eFrPCt@k@hCkAdE}JrY{HdUmEfKaChEqClDqFzEqDrBkEbA}BNuA?cD]cDOaDLsCJ_BEeFo@mHs@iACwJDsDHkDZuDl@mEpAsEnB}IrDeAv@{@fAcAzBe@zBg@fHaAtJyAzQgAhSFzIWzB]zAaCjF{CtFqLpTkFhI{BrCeCfCiH~FaG|EuCpCyEfHiF|HqFhJoCfHeCrJmJj_@eK|ZwBbHoChIoC`HkBpGy@jDkGb\\iB~K_CpPoBhPcBrKgAlEiAzCeCxFqItTcGzOoEfIyC`FkKnPeDpDgDjC}MhH}BjA_C|AyBvBuAnBcG~KmErHgBbCmE|DeCbBqNfHiEtBeDrBaBzAcBxBqAfCw@|BcArFYnGG`Ha@bF{@zDkBnEyCxFwLbVsGxLaDpDkD~BqFfBkKbCoMhCgEx@aDhAsCnAeCxAwFlEeEzEsIlKiAvAgCdCeCbBoFdDmFnFs@v@_A~@_A~@WD_At@MJ{@v@oCbCcE~BmAx@m@^iApAm@`Am@fAg@h@iAbA_ArAWA_@I}@k@cA]_AO}AEY?"
         },
         "summary" : "I-5 N and US-101 N",
         "warnings" : [],
         "waypoint_order" : []
      }
   ],
   "status" : "OK"
}
```


### 3. Places API (JSON Return)

Create Get a places details URL working to return JSON: https://developers.google.com/places/web-service/details. Like the Directions API, you can include this on the same page. If not creating a webpage to run your URL, at least document it using the GitHub MD file / markdown language (https://guides.github.com/features/mastering-markdown/)

Get the examples working and prove your understanding of each through tweaks or documentation. For example, try the examples in the documentation, then modify the map/urls to locations that YOU KNOW to demonstrate your understanding. Bonus Big bonus if you can find and repeat/demonstrate a bug or major issue!!!  

#### My html page containing this API call is: https://jserendip.github.io/Geom99/Gmaps/placesAPIJSON.html 

# Tutorials
Complete all THREE tutorials listed. Store them in a Gmaps folder in your GitHub account. You do not need to enhance these beyond the specifications as noted. 

Please Use JavaScript, Not Typescript, for all activities with Google Maps. 
What is Typescript? See https://cloud.google.com/blog/products/maps-platform/google-maps-platform-javascript-api-and-typescript

Base Documentation: https://developers.google.com/maps/documentation/javascript/

Be sure to understand the functions and methods you are using by looking them up in the API: https://developers.google.com/maps/documentation/javascript/reference/



# Create Tutorial 1: 
https://developers.google.com/maps/documentation/javascript/adding-a-google-map
Complete this tutorial using the provided key (AIzaSyA5a1FoKmbmQ1djPh6pRx7oiknBf3ACNOE)--you do not need to do Step 3. Store your solution in your personal public GitHub account under a Gmaps folder. Modify the solution so the "Marker" is at the location of your last degree or diploma. Name it tutorial1.html.

#### My html page containing this API call is: https://jserendip.github.io/Geom99/Gmaps/tutorial1.html 


# Create Tutorial 2: 
https://developers.google.com/maps/documentation/javascript/marker-clustering 
Complete this tutorial and host it in your GitHub account. Use the Provincial Parks of Ontario (List of Ontario Provincial Parks) as the locations. Name it tutorial2.html

#### My html page containing this API call is: https://jserendip.github.io/Geom99/Gmaps/Tutorial2_markerclusters.html 

# Create Tutorial 3: 
https://developers.google.com/maps/documentation/javascript/earthquakes
Complete this tutorial and host it in your GitHub account. Keep each step and host them in your GitHub account as Create tutorial3a.html (points), Createtutorial3b.html (circles) and Create tutorial3c.html (heatmap). 

Bonus Interested in a different maps api tutorial? Get pre-approval and you can complete that in place of one or all of the three above!

#### My html page containing this API call is: https://jserendip.github.io/Geom99/Gmaps/tutorial3a.html 
#### My html page containing this API call is: https://jserendip.github.io/Geom99/Gmaps/tutorial3b.html 
#### My html page containing this API call is: https://jserendip.github.io/Geom99/Gmaps/tutorial3c.html 

# Option 2:
Create a webpage to tell a story using MyMaps and/or Google Embedded Maps

    Create and publish a MyMaps to showcase a location of interest to you using one or more spatial layers using multiple records (a single point or line is not appropriate and does not meet the requirements). 
    Use the Embedded Maps, StreetView, Places or and other Embedded map to add to the context of your story: https://developers.google.com/maps/documentation/embed/get-started

Note: For Option 2 your "story" must contain no fewer than 3 maps on the single page and tell a story in the HTML document effectively to tie all maps together. 

My Story Map for Option 2 is of the "Line of Saint Michael" in Europe:  https://jserendip.github.io/Geom99/Gmaps/stmichaelsline.html

