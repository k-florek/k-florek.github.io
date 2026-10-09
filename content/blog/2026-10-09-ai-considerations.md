---
title: On the Reasoning of AI
date: 2026-10-09
description: Thoughts on AI thoughts
tags:
  - AI
  - reasoning
  - LLMs
draft: false
cover: /images/blog/CityScapeII-Grace_Grothous.jpg
coverCredit: "Grace Grothous, City Scape II"
coverDarken: 0.5   # 0–1, black overlay opacity on the cover image
---
## LLM Reasoning

I was recently listening to a lecture given by Adam Brown who leads Blueshift, a research team at Google DeepMind focused on advancing the scientific and reasoning capabilities of artificial intelligence. His lecture [Training Sand to Think: Artificial General Intelligence & Future of Physics](https://youtu.be/Mw60FH5iflI) at Perimeter Institute for Theoretical Physics is an excellent primer on how AI LLMs are trained. For this blog post I wanted to walk through his lecture and highlight a few of things he described. In the grand scheme of LLMs and their application to scientific problems I believe its valuable to understand how they have been built and trained to be aware of their limitations.

### Pre-training and Post-training
LLM have been advancing rapidly in the pipelines that are used to train them. Early in the release of LLMs the training methodology was focused solely on pre-training. Using massive, unlabeled text datasets to build predictive capabilities around seeing words and predicting which word should come next. With millions of words the models produce gibberish, with billions of words it produces coherent sentences, with 10s of trillions of words or the entire internet, the model is capable of intelligent conversion.
\
\
Advances in AI fronter labs led to the application of post-training methods that refine knowledge, improve reasoning, and enhance accuracy. Post-training attempts to build the model into a safe and specialized assistant. Some of the core techniques used in post-training include Supervised Fine-Tuning (SFT), using input-output pairs, Direct Preference Optimization (DPO), optimizing the model to prefer better responses based on human feedback, and Reinforcement Learning (RL), that uses reward signals to refine behavior.

::blog-figure{src="/images/blog/2026-10-09/llm-post-training.png" alt="Taxonomy of post-training approaches for large language models, including supervised fine-tuning, preference optimization, and reinforcement learning."}
Figure 1. A taxonomy of post-training approaches for LLMs. [Kumar et. al, arXiv, 2025](https://arxiv.org/html/2502.21321)
::

### Cost of training
Increasing the scale of training increases the performance. Training compute is measured in Floating-point Operation or FLOP. A FLOP is a single arithmetic calculation, such as addition, subtraction, multiplication, or division, performed on a number with a fractional part. 

* 1 mole (6.022x10^23) of FLOP is ~ $1,000,000
* GPT3 (2020) ~ 0.5 mol FLOP
* GPT4 (2023) ~ 30 mol FLOP
* GPT4.5 (2025) ~ 350 mol FLOP

### Bigger is better but it isn't everything
Performance can also be increased by through novel and sometimes obvious means. In Adam's lecture he covers methods that have been found to improve performance from including more and better data, asking nicely and "think step by step", having the model reason for longer time, and allowing LLMs to hold conversations and work together. Explaining why prompt engineering and structure have been key. 

### Measuring performance and challenges of benchmarks
Benchmarking LLM performance has been a process of identifying tests and question sets across various areas of knowledge and reasoning. Then testing models until they reach saturation or the ability to answer correctly 100% of the time. Epoch AI, a nonprofit focused on investigating the progress of AI, has created an Epoch Capabilities Index (ECI) that combines scores from different benchmarks into a single "general capability" score. Showing a strong linear growth of model performance and accuracy progress.

::blog-figure{src="/images/blog/2026-10-09/epoch-benchmarks.png" alt="Epoch AI benchmark graph showing the Epoch Capabilities Index rising over time across model generations."}
Figure 2. Epoch AI, Epoch Capabilities Index (ECI). [https://epoch.ai/benchmarks](https://epoch.ai/benchmarks?view=graph&tab=eci)
::

### Progress doesn't imply a lack of weakness
In Adam's lecture he presents a challenge to ChatGPT to show some of the flaws in current LLM reasoning, or at least flaws in how they are trained.
\
\
He presents a riddle:
```
A boy and his father are in a car accident and the father is sadly killed. The boy is rushed to the hospital where he is taken to the operating room. Upon seeing him, the surgeon exclaims, I can't operate on him. He's my son. How is this possible?
```
::blog-figure{src="/images/blog/2026-10-09/llm-riddle-01.png" alt="ChatGPT reasoning diagram for the classic surgeon riddle, showing the explanation that the surgeon is the boy's mother."}
Figure 3. LLM correctly reasoning the riddle.
::
\
Changing the riddle in his lecture demonstrates a flaw but in the current iteration of ChatGPT this flaw is no longer visible:
```
A boy and his mother are in a car accident and the mother is sadly killed. The boy is rushed to the hospital where he is taken to the operating room. Upon seeing him, the surgeon (who is the boy's father) exclaims, I can't operate on him. He's my son. How is this possible?
```
::blog-figure{src="/images/blog/2026-10-09/llm-riddle-02.png" alt="ChatGPT reasoning diagram for the modified surgeon riddle where the surgeon is the boy's father, correctly explaining the family relationship."}
Figure 4. LLM correctly reasoning the altered riddle.
::
\
However when I tested my own version of this riddle, I found a similar flaw:
```
A boy and his father are in a car accident and the father is sadly killed. The boy is rushed to the hospital where he is taken to the operating room. Upon seeing him, the surgeon (who is the boy's father) exclaims, I can't operate on him. He's my son. How is this possible?
```
::blog-figure{src="/images/blog/2026-10-09/llm-riddle-03.png" alt="Example of an incorrect large language model reasoning response to the altered surgeon riddle, showing the model misidentifies the relationship."}
Figure 5. LLM incorrectly reasoning my variation of the riddle.
::
\
\
In Adam's example during the lecture and my own, the model seems to find itself matching to the standard version of the riddle when presented with slight but significant alterations. I did notice in my own testing that longer running conversations tended to prevent the model from snapping to standard version answer and when given more context, in this case multiple but small alterations, the model seemed to pick up on the trend.

### What this means in the future of AI
It is likely models will continue to improve at a rapid pace and the ways that we examine models today with be considered elementary to the next generation of models. It is also likely that there will be weaknesses hidden in the training of those future models and understanding both the presence of gaps and their impact will be critical. It is also likely our ability to detect those gaps will become more difficult if not impossible. The statement, "you don't know what you don't know" seems to be a critical perspective to maintain.