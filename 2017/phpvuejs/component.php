<html>
<head>
    <script src="https://unpkg.com/vue"></script>
</head>
<body>

<child message="hello!"></child>

<script>
    Vue.component('child', {
        props: ['message'],
        template: '<span>{{ message }}</span>'
    })
</script>
</body>
</html>