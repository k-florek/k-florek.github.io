<template>
    <div class='content-container'>
        <div class='content-items'>
            <div class='content-title'>about: a scientist with a passion for health</div>
            <p>With a lifelong fascination for infectious diseases and an interest in public health, I have directed my career towards a passion of developing new ways to unravel complex biological questions. I am currently a Senior Genomics and Data Scientist at the <a href="http://www.slh.wisc.edu/">Wisconsin State Laboratory of Hygiene (WSLH)</a> where I lead a team of incredibly talented and dedicated public health data scientists. My work involves a combination microbiology, bioinformatics, statistics, and software development and I spend most of my time applying novel computational methodologies and building genomics and data analytics capacity leveraging emerging cloud-based technology both within the WSLH and the greater public health community.</p>
            <img width=50% class="content-images" :src="sc2Tree" alt="SARS-CoV-2 Phylogenetic Tree" />
            <p>A few notable projects that I have led include an easy to use web-based platform for performing bioinformatic workflows <a href="https://www.easygenomics.org/">Easy Genomics</a>, a repository of containerized applications <a href="https://github.com/StaPH-B/docker-builds">StaPH-B Docker Builds</a>; a toolkit of software and workflows for public health bioinformaticians <a href="https://github.com/StaPH-B/staphb_toolkit">StaPH-B ToolKit</a>; and a dashboard for displaying SARS-CoV-2 genomic surveillance in Wisconsin <a href="https://dataportal.slh.wisc.edu/sc2dashboard">WI SARS-CoV-2 Genomic Dashboard</a>. You can find most of my work on my personal github <a href="https://github.com/k-florek/"><FontAwesomeIcon :icon="['fab', 'github']" /> k-florek</a> or our lab's github <a href="https://github.com/wslh-bio"><FontAwesomeIcon :icon="['fab', 'github']" /> wslh-bio</a> or <a href="https://github.com/wslh-data"><FontAwesomeIcon :icon="['fab', 'github']" /> wslh-data</a>. These projects are built using technologies including AWS, Terraform, Nextflow, Python, R, Bash, Nodejs, Docker, and include a variety of genomics, machine learning, and evolutionary biology tools.</p>
            <img width=50% class="content-images" :src="staphbLogo" alt="State Public Health Bioinformatics Logo">
            <p>My work frequently involves close collaboration with the <a href="https://www.aphl.org/">Association of Public Health Laboratories (APHL)</a> and the <a href="https://www.cdc.gov/">Centers for Disease Control and Prevention</a> <a href="https://www.cdc.gov/amd/index.html">Office of Advanced Molecular Detection (OAMD)</a> to develop pathways towards enhancing the public health workforce and improving access to data insights. I also serve as a steering committee member of <a href="http://www.staphb.org/">StaPH-B</a> a consortium of public health bioinformaticians committed to addressing the barriers affecting genomics in state public health laboratories.</p>
            <br>
            <p>In my spare time I enjoy creative ventures such as watercolor painting, photography, and board games along with active hobbies like backpacking and roller skating.</p>
            <div class="frame"><img class="art" :src="sandhillCrane" alt="Watercolor painting of a sandhill crane"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    useHead({
        bodyAttrs: {
            class: 'page'
        }
    })
    import sc2Tree from '~/assets/images/sc2-tree.svg'
    import staphbLogo from '~/assets/images/staphb_logo_black.png'
    import sandhillCrane from '~/assets/art/sandhill_crane.jpg'
</script>