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

### Padding collapse:
```html
<element data-padding-collapse="*">
    <!-- Affected code -->
</element>
```
**Available parameters:**
* top
* bottom
* left
* right

<br>

## JS Functions
### Infobox
```html
<script>
    infobox("icon_name", "title", "text");
</script>
```
#### Recommended usage:

##### Infobox with 1 column:

```html
<div data-content="main">

    <div data-col="1">
        <script>
            infobox("icon_name", "title", "text");
        </script>
    </div>
    
</div>
```
<br>

##### Infobox with 2 columns:

```html
<div data-content="main">

    <div data-col="2">
        <script>
            infobox("icon_name", "title", "text");
        </script>
    </div>
    
    <div data-col="2">
        <script>
            infobox("icon_name", "title", "text");
        </script>
    </div>
    
</div>
```
<br>

##### Infobox with 3 columns:

```html
<div data-content="main">

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
    
</div>
```