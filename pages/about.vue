<template>
    <div class='content-container'>
        <div class='content-items'>
            <div class='content-title'>about: a scientist with a passion for health</div>
            <p>With a lifelong fascination for infectious diseases and an interest in public health, I have directed my career towards a passion of developing new ways to unravel complex biological questions. I am currently a Senior Genomics and Data Scientist at the <a href="http://www.slh.wisc.edu/">Wisconsin State Laboratory of Hygiene (WSLH)</a> where I lead a team of incredibly talented and dedicated public health data scientists. My work involves a combination microbiology, bioinformatics, statistics, and software development and I spend most of my time applying novel computational methodologies and building genomics and data analytics capacity leveraging emerging cloud-based technology both within the WSLH and the greater public health community. Lately that focus has been directed towards thinking about how we modernize public health genomic data systems with data lakes and automation, how we govern the data we generate, and where AI and machine learning can (and can't) help in the lab and in public health.</p>
            <img width=50% class="content-images" :src="sc2Tree" alt="SARS-CoV-2 Phylogenetic Tree" />
            <p>A few notable projects that I have led include a repository of containerized applications <a href="https://github.com/StaPH-B/docker-builds">StaPH-B Docker Builds</a>; a toolkit of software and workflows for public health bioinformaticians <a href="https://github.com/StaPH-B/staphb_toolkit">StaPH-B ToolKit</a>; and a dashboard for displaying SARS-CoV-2 genomic surveillance in Wisconsin <a href="https://dataportal.slh.wisc.edu/sc2dashboard">WI SARS-CoV-2 Genomic Dashboard</a>. You can find most of my work on my personal github <a href="https://github.com/k-florek/"><FontAwesomeIcon :icon="['fab', 'github']" /> k-florek</a> or our lab's github <a href="https://github.com/wslh-bio"><FontAwesomeIcon :icon="['fab', 'github']" /> wslh-bio</a> or <a href="https://github.com/wslh-data"><FontAwesomeIcon :icon="['fab', 'github']" /> wslh-data</a>. These projects are built using technologies including AWS, Terraform, Nextflow, Python, R, Bash, Nodejs, Docker, and include a variety of genomics, machine learning, and evolutionary biology tools.</p>
            <br>
            <p>A lot of my recent work has gone into <a href="https://www.easygenomics.org/">Easy Genomics</a>, an open-source web application for running genomic analyses without writing code. Users can upload sequence data, choose a pipeline, and start the run from the browser while the analysis runs in the cloud. It started as a collaboration between the WSLH, AWS, and DEPT® to solve a problem we experienced during the SARS-CoV-2 pandemic, and it has since been adopted a few laboratories outside of Wisconsin. The code is on <a href="https://github.com/dept/easy-genomics"><FontAwesomeIcon :icon="['fab', 'github']" /> GitHub</a> if you want to take a look.</p>
            <img width=75% class="content-images" :src="easyG" alt="Easy Genomics Login Page">
            <p>My work frequently involves close collaboration with the <a href="https://www.aphl.org/">Association of Public Health Laboratories (APHL)</a> and the <a href="https://www.cdc.gov/advanced-molecular-detection/index.html">Centers for Disease Control and Prevention, Office of Advanced Molecular Detection (OAMD)</a> to develop pathways towards enhancing the public health workforce and improving access to data insights. I share this work through <NuxtLink to="/talks">talks</NuxtLink> and <NuxtLink to="/lectures">lectures</NuxtLink> on topics like workflow management languages, public health data strategy, data governance, and AI, and I have started a <NuxtLink to="/blog">blog</NuxtLink> for the ideas and ramblings that don't fit anywhere else. I also serve as a steering committee member of <a href="http://www.staphb.org/">StaPH-B</a> a consortium of public health bioinformaticians committed to addressing the barriers affecting genomics in state public health laboratories.</p>
            <br>
            <p>In my spare time I enjoy creative ventures such as watercolor painting, photography, and board games along with active hobbies like backpacking and roller skating.</p>
            <div class="frame"><img class="art" :src="crow" alt="Watercolor painting of a crow"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    useSeoMeta({
        title: 'About',
        description: 'Learn about Dr. Kelsey Florek – Senior Genomics and Data Scientist at the Wisconsin State Laboratory of Hygiene, passionate about infectious diseases, bioinformatics, and public health.',
        ogTitle: 'About | Dr. Kelsey Florek',
        ogDescription: 'Senior Genomics and Data Scientist specializing in genomics, bioinformatics, data science, and public health at the Wisconsin State Laboratory of Hygiene.',
        ogUrl: 'https://k-florek.net/about',
        ogImage: 'https://k-florek.net/florek_hs_small_2024.png',
        ogType: 'profile',
    })
    useHead({
        bodyAttrs: {
            class: 'page'
        }
    })
    import sc2Tree from '~/assets/images/sc2-tree.svg'
    import staphbLogo from '~/assets/images/staphb_logo_black.png'
    import easyG from '~/assets/images/easy-g.png'
    import sandhillCrane from '~/assets/art/sandhill_crane.jpg'
    import crow from '~/assets/art/crow.jpeg'
</script>