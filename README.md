To show mutual followers/following of two or multiple instagram accounts that you either follow or that are just public accounts follow these steps where you can use either of the two options:

## 1. InSaverify:

1.  Install [InSaverify | Web for Instagram™](https://chromewebstore.google.com/detail/insaverify-web-for-instag/fobaamfiblkoobhjpiigemmdegbmpohd) Chrome extension
2.  Click the InSaverify icon to launch mobile Instagram for PC
3.  Go to the Following/Followers page of an IG account and scroll all the way down to the button so all the following/follower would have loaded
4.  Press F12 to open Chrome Developer Tools and go to the Sources tab. There select Snippets like here:
    ![image](https://github.com/not-an-agent/Show-mutual-followers-following-of-multiple-instagram-accounts/assets/140798900/eaa4ce14-24bb-4b40-aa07-1c812e87c05b)
5.  Once in Snippets create a new snippet:  
    ![image](https://github.com/not-an-agent/Show-mutual-followers-following-of-multiple-instagram-accounts/assets/140798900/77bdd33c-4bf4-48b2-844b-28e201422e92)
6.  Open in a new tab [get_followers_following_of_an_instagram_account.js](https://raw.githubusercontent.com/not-an-agent/Show-mutual-followers-following-of-multiple-instagram-accounts/main/get_followers_following_of_an_instagram_account.js) and copy its content
7.  Paste in the content of get_followers_following_of_an_instagram_account.js into the newly created snippet and press CTRL + S to save it. Then either press the run button:
    ![image](https://github.com/not-an-agent/Show-mutual-followers-following-of-multiple-instagram-accounts/assets/140798900/dfd01132-0129-49aa-84d2-d53af9942d76)
    or press CTRL + Enter to run the snippet
8.  At the button of the followers/follwing page should show a button to download all the links of all the IG accounts as a text file. Click the download button. We will need the text file for later
9.  At the same time it should print in the Console of the Chrome Developer Tools all the IG accounts and the count of the printed IG accounts.

    ![image](https://github.com/not-an-agent/Show-mutual-followers-following-of-multiple-instagram-accounts/assets/140798900/65fcd46e-2ec3-45c0-b961-6a7f3400f8ca)

    Beware, for some reason IG doesn't load all the IG accounts when scrolling all the way to the bottom, for example I noticed that out of 130 accounts, only about 105 show up

10. You should now get the following/followers text file of another IG account that you think the previous IG account is friends with
11. Having at this point, let's say 2 text files, with the followers of those 2 said IG accounts, install [Tampermonkey](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) Chrome extension, then install [Linkify Plus](https://greasyfork.org/en/scripts/2709-linkify-plus/code), then head over to https://molbiotools.com/listcompare.php, which allows the comparison of more than 2 files
12. At https://molbiotools.com/listcompare.php upload the 2 followers text files and hit Compare
13. Now, in the Shared Items section of the page you should show what are the mutual IG accounts of the 2 IG accounts, if any

## 2. User Agent spoofing

1.  Install [Simple Autoscroll](https://chromewebstore.google.com/detail/simple-autoscroll/fgecljolecpahpphjjhfhgiimljpkodo) Chrome extension
2.  Go to to an IG account
3.  Press F12 to open Chrome Developer Tools and once its window is open press ESC
4.  Now press the 3 dots and select Network conditions:   
    ![image](https://github.com/not-an-agent/Show-mutual-followers-following-of-multiple-instagram-accounts/assets/140798900/a601f859-2ded-43e2-a4a3-69c1b3bd5397)
5. On Network coditions select the following:
   ![image](https://github.com/not-an-agent/Show-mutual-followers-following-of-multiple-instagram-accounts/assets/140798900/25ad329d-b010-4aeb-ae08-9b8d27ad5119)
   Make sure User agent is set to Chrome — Android Mobile (high-end)
6. Refresh the page by either pressing F5 or by pressing the ![image](https://github.com/not-an-agent/Show-mutual-followers-following-of-multiple-instagram-accounts/assets/140798900/015fdfe4-05f4-4e1f-b898-20c24e384064) button. Make sure you don't close Chrome Developer Tools, otherwise it won't work
7. Go to the Following/Followers page of the IG account
8. Press the icon of Simple Autoscroll and hit Go to automatically scroll all the way to the bottom of the page so all the IG account would load. I used these settings:
   
   ![image](https://github.com/not-an-agent/Show-mutual-followers-following-of-multiple-instagram-accounts/assets/140798900/10c0a5f1-3dff-4320-a845-160fb88f0b1c)

9. In Chrome Developer Tools go to the Sources tab. There select Snippets like here:
    
   ![image](https://github.com/not-an-agent/Show-mutual-followers-following-of-multiple-instagram-accounts/assets/140798900/eaa4ce14-24bb-4b40-aa07-1c812e87c05b)
   
10. Follow the steps from [5 - 13 for InSaverify](https://github.com/not-an-agent/Show-mutual-followers-following-of-multiple-instagram-accounts/edit/main/README.md#1-insaverify)


 
----
Alternatives:

1. https://molbiotools.com/listcompare.php can be replaced with:
- https://comparetwolists.com/ - this only allows the comparison of 2 lists, where you have to copy and paste the content of the followers/following text files
- https://www.mynikko.com/tools/tool_duplicateremover.html - this allows multiple lists to be compared at the same time, where you have to copy and paste the content of the followers/following text files in the same text box of the site and hit Find Duplicates

2. User agent spoofing by using Chrome Developer Tools can be replaced with [User-Agent Switcher and Manager](https://chromewebstore.google.com/detail/user-agent-switcher-and-m/bhchdcejhohfmigjafbampogmaanbfkg) Chrome extension. To change the user agent, click User-Agent Switcher and Manager icon and pick:
   
   ![image](https://github.com/not-an-agent/Show-mutual-followers-following-of-multiple-instagram-accounts/assets/140798900/ad738ecc-fd40-4817-9e44-17778e4dfb83)
   
   then refresh the page.
   This choice might fail over time due to IG and browser updates. For when it will fail you should experiment with other choices in User-Agent Switcher and Manager, especially with Chrome and Android:

   ![image](https://github.com/not-an-agent/Show-mutual-followers-following-of-multiple-instagram-accounts/assets/140798900/bde97ea1-61c5-4b85-a32d-94b230cd05a9)

