### Sass 7-1 boilerplate by context and modules

_based on Sass 7-1 architecture pattern from Sass [Guidelines](https://sass-guidelin.es/#the-7-1-pattern) by [Hugo Giraudel](https://github.com/HugoGiraudel)_    

shares the same concept, but a bit improved


**Features One + Two**  
Pattern based on the layout basic hierarchy model and follows **right here - right now** concept.

![alt text](https://raw.githubusercontent.com/hadabr/assets/master/ELZFC.jpg?token=AA2JAIDPMGNU3S7XKH63LJ26UYTTC)

**Modules**
When you work on some component (i.e drag & drop form), you do completely the component right at the place; don't need to split it into related chunks by mixins, functions, helpers etc.  

Instead, we can consider and treat it as a module (and layout/ stays as a basement) - more than that - the separation makes tasks more independent without any loss on relation.  

Besides, **context**  

src/layout/header  
src/abstract/mixins  

and 

src/ui/header_navigation  
src/layout/mobile  

2nd is more obvious to construct and easier to maintain
 
![alt text](https://raw.githubusercontent.com/hadabr/assets/master/Screenshot_74.png?token=AA2JAIAQ545DNQN5KKIRTXS6U3A6O)

**Feature Three**  
every file (when necessary) has the same structure  
always to know where on the page you're **right now**

![alt text](https://raw.githubusercontent.com/hadabr/assets/master/Screenshot_72.png?token=AA2JAIFWHQBP5SUPEF3BYR26UYVHM)

**Feature Four**  
_TBA_  
_parser will show what modules was_ 

# scss/  
# |__ base/                        [common and general]()
      |__ base.scss                [# basement; reffered to :root and body]()
      |__ fonts.scss               [# font-face rules]()
      |__ typography.scss          [# text-appereance]()
# |__ layout/                      [layout basement]()
      |__ flex.scss                [2 to 4 layouts cover]()
      |__ bootstrap.scss           [99% of web]()
      |__ grid.scss  
      |__ media_queries.scss       
# |__ themes/                      [color theme]()
      |__ default.scss  
      |__ default_colors           [# pre-made brand colors]()
      |__ night_mode.scss
# |__ ui/                          [main ui layout]()
      |__ header_navigator.scss     
      |__ header_menu.scss  
      |__ sidebar_left.scss  
      |__ sidebar_right.scss  
      |__ footer.scss       
# |__ content/                     [common content]()
      |__ about.scss               [components]()
      |__ articles.scss
      |__ posts.scss  
      |__ comments.scss
      |__ messages.scss                   
      |__ imaged_list.scss         [# contact list, ]()
      |__ built_in_ads.scss    [# shop items etc..]()
      |__ main_ads.scss  
      |__ card.scss         
      ...                          [# custom ones]()
# |__ media/                       [common content]()
      |__ map.scss                 [components]()
      |__ images.scss
      |__ video.scss  
      |__ audio.scss
      ...                          [# custom ones]()      
# |__ pages/  
      |__ home.scss   
# |__ vendors/                     [control appearance]()
      |__ normalize.scss           [in all known browsers]()