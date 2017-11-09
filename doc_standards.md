# Document standards (HTML)

**Follow these standards in order to ensure consistent use of code across the website.**

<br>

## Attributes

### Text align:
```html
<element data-txt-align="*">
    <!-- Affected code -->
</element>
```
**Available parameters:**
* left
* center
* right
* justify

<br>

### Horizontal align (element):
```html
<element data-hz-align="*">
    <!-- Affected code -->
</element>
```
**Available parameters:**
* left
* center
* right

<br>

### Vertical align (element):
```html
<element data-vc-align="*">
    <!-- Affected code -->
</element>
```
**Available parameters:**
* left
* center
* right

<br>

## JS Functions
### Infobox
```html
<script>
    infobox("icon_name", "title", "text");
</script>
```
**Recommended usage:**

Note: One infobox per column element.

```html
<element data-content="main">

    <div data-col="3">
        <script>
            infobox("icon_name", "title", "text");
        </script>
    </div>
    
    <div data-col="3">
        <script>
            infobox("icon_name", "title", "text");
        </script>
    </div>
    
    <div data-col="3">
        <script>
            infobox("icon_name", "title", "text");
        </script>
    </div>
    
</element>
```