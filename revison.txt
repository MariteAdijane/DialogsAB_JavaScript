0. JavaScript:
* iekš html (iekš head, body - iekš <script> tagiem)
* atsevišķā lokālā failā
* atsevišķā ārējā failā (kut kur tīkla)
+ scopes - {}
+ JS programmēšanas valodas teikumi parasti beidzās ar - ;
** Browser + Inspect + Console (Ctrl + L)
                     + Source + Debug

1. variables (mainīgie)
* var, let, const
* primitīvie datu tipi (Number, String, Boolean, ...)
* daudzas dažādas matemātiskās, loģiskās (||, &&, ...), bitu (|, &, >, ..)
  utt. operācijas

2. arrays (masīvi)
* viens_vaards[daudzi indeksēti elementi/vērtības]
* daudzas dažādas metodes attiecībā uz šo elementu kopu
** String - simbolu masīvs
   "static text 1 " + variable_value_OR_operation_result + "static text 2"
   `static text 1 ${variable_value_OR_operation_result} static text 2`

3.1. if (koda izpildes zarošana)
+ else
+ izšķiršanas par vēlāmo turpmāk izmantojamo vērtību vai darāmo darbību ar konstrukciju
  (nosacījums) ? true_darbības : false_darbības;

3.2. switch (-"- ja ir daudz plašākā nākamā zara izvēle)
+ break;
+ default

4. loops (cikli)
+ for( ; ; ){}
+ while(){}
+ do{}while()
++ break;
+++ for (let current_element of array) - current_element contains value
+++ for (let current_element in array) - current_element contains index
+++ for (let current_property in object) - current_property contains property name
+++ for (let current_property of object) - Isn't possible! - object is not iterable

5. functions
+ function function_name(function_arguments){function_body} - definition with statement
+ const[/var/let] function_name = function (function_arguments){function_body} - definition with expression
++                              = function function_entire_for_recursion(function_arguments){function_body}
+++ functions defined by expression can't be hoisted - nevar tikt izmantotas pirms definēšanas (apraksta)
++++ pārlūku iebūvētas funkcijas

6. objects
+ properties (īpašības) - object_name.object_property_name
                          object_name["object_property_name"]
+ methods (funkcijas)
+ this (Window, Object, HTML element in case of event)
++ const object_name = {};
   const object_name = new Object();
++ object_name.object_property_name = object_property_value;
++ Object.defineProperty(object_name, "object_property_name", {
   value: ...,
   writable: true/false,
   enumerable: true/false,
   configurable: true/false});
++ Object.values(object_name) -> array with values of properties
                                 and descriptions of methods
++ JSON.stringify(object_name) -> symbol string with stringified property names
                                  and their values (NB! in output no methods)
++ object_name.object_method_name.call(other_object_name,object_method_arguments);
++ other_object_name.other_object_method_name = object_name.object_method_name.bind(other_object_name);
+++ pārlūku iebuvēti objekti (Window,console)