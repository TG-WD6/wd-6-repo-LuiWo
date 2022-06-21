/* Er zijn verschillende selectors, bijvoorbeeld;

type selectors
class selectors
ID selectors
descendant selectors
Maak van de bovengenoemde selectors voorbeelden. Geef in je antwoord ook aan wat de voordelen zijn van elke selector. */


/* ---Type Selector--- */ 
Wanneer je specifiek HTML tags selecteerd
h1 {color: red;}

p {color: red;}

Dit geeft style aan alle geselecteerde tags, alle <h1> en alle <p>

/* ---Class Selector--- */
Dit is wanneer jouw HTML tag een class heeft. bv; <h1 class="hoofdstk">Hoofdstuk</h1> 
Dan can je met . (de class selector) h1 stylen met ; .hoofdstk {color: red;}
Hierbij kun je meerdere tags die dezelfde class naam hebben tegelijker tijd stylen.

/* ---ID Selector--- */
Dit is wanneer jouw HTML tag een ID heeft. bv; <h1 id="hoofdstk">Hoofdstuk</h1> 
Dan can je met # (de class selector) h1 stylen met ; #hoofdstk {color: red;}
Met deze kun je specifiek een tag stylen. Er mag alleen maar een unieke ID naam in een HTML file gebruikt worden.

/* ---Descendant Selector--- */
Dit is wanneer je een element binnen een ander element selecteerd. Dit word gedaan door een spatie tussen de twee selectors te zetten.
bv; <h1>I am a header.
       <p>I'm a parafraaf.</p>
    </h1>

Om de <p> te selecteren is het; h1 p {color: red;}

