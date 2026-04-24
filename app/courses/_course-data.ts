import type { CoursePageData } from "./_CoursePage";

/**
 * Registry of the 6 SEO-priority course pages.
 * Source: LBSOY WordPress Staging20_Courses.txt + enriched copy aligned to
 * Long Beach local SEO and the MYN vocabulary rule (never mix "yoga teacher"
 * and "yoga therapist" in the same sentence).
 */

export const courseRegistry: Record<string, CoursePageData> = {
  "senior-yoga": {
    slug: "senior-yoga",
    hero: {
      badge: "For ages 60+ in Long Beach",
      titlePre: "Senior",
      titleEm: "Yoga",
      titlePost: "in Long Beach",
      subtitle:
        "Safe, evidence-based yoga classes for Long Beach seniors — designed to protect joints, improve balance, and keep you independent at home. Taught in Long Beach by an IAYT-aligned yoga therapist with a decade of clinical experience.",
    },
    tldr:
      "Senior Yoga at Long Beach School of Yoga is a gentle, strength-and-balance-focused program for adults 60+. Classes are taught by a registered yoga therapist with 10+ years in Long Beach. We work around arthritis, osteoporosis, joint replacements, and balance concerns — with modifications for every pose, so you never have to skip a class again.",
    sections: {
      whatItIs: {
        heading: "A yoga program built for aging well in Long Beach",
        body: [
          "Senior yoga is not a slower version of a regular class — it is a completely different practice. We build each class around the three things that matter most after 60: balance, joint mobility, and bone-loading strength. Research from the National Institute on Aging and published in <em>JAMA Internal Medicine</em> consistently shows that these three targets are the single biggest predictors of whether an older adult stays independent.",
          "At Long Beach School of Yoga, senior classes meet you where you are. You can practice standing, seated in a chair, or against a wall. Every pose has a modification — there is no ‘advanced’ version you are supposed to catch up to. If you've had a hip or knee replacement, if you're living with arthritis, or if you've fallen in the last year, you are exactly who this class is for.",
          "The instruction blends traditional hatha yoga with modern mobility and balance training. Breath work, gentle asana, and short seated meditations anchor the class — and we end with a restorative wind-down designed to calm the nervous system and improve sleep quality.",
        ],
      },
      benefits: {
        heading: "What senior yoga does for your body and mind",
        intro:
          "Consistent practice of 2–3 sessions per week over 8–12 weeks produces measurable changes in balance, grip strength, and pain scores — according to multiple studies of older adults published in the peer-reviewed literature.",
        cards: [
          {
            title: "Balance & fall prevention",
            body: "One in four adults over 65 falls each year. Yoga practices that train single-leg stance, ankle mobility, and hip strength cut that risk meaningfully in clinical trials.",
          },
          {
            title: "Joint mobility with less pain",
            body: "Slow, intentional range-of-motion work lubricates joints, decompresses the spine, and reduces stiffness associated with osteoarthritis — without the impact of traditional fitness.",
          },
          {
            title: "Bone-loading strength",
            body: "Standing poses and gentle resistance work load the hips, spine, and wrists — the three fracture-prone sites for older adults — supporting bone density alongside medical care.",
          },
          {
            title: "Better sleep & mood",
            body: "Breath work and restorative yoga downregulate the nervous system, lowering evening cortisol and improving sleep onset in older adults.",
          },
          {
            title: "Community",
            body: "Our Long Beach senior cohort meets consistently. Regulars know each other, trade tips, and share rides. Loneliness is a bigger mortality risk than smoking — community matters.",
          },
          {
            title: "Independence at home",
            body: "Better balance, stronger legs, and confident transitions (floor-to-standing, chair-to-standing) directly translate to staying in your home longer without help.",
          },
        ],
      },
      curriculum: {
        heading: "What a typical 60-minute class looks like",
        intro:
          "Every class follows the same arc. The structure is predictable on purpose — that's how older adult learners build confidence and skill without cognitive overload.",
        modules: [
          {
            title: "Arrival & breath (10 min)",
            body: "Seated centering, diaphragmatic breathing, and a short mobility sequence to warm the spine, shoulders, and hips without strain.",
          },
          {
            title: "Standing balance & strength (20 min)",
            body: "Wall-supported standing poses, single-leg work with chair support, and gentle load-bearing sequences for hips and ankles.",
          },
          {
            title: "Floor or chair work (15 min)",
            body: "Spine mobility, hip openers, and shoulder range-of-motion — adapted for the floor or entirely from a chair, depending on what your body needs that day.",
          },
          {
            title: "Restorative close (10 min)",
            body: "Supported savasana or a restorative hip pose with props. A short guided relaxation to lower heart rate and finish calm.",
          },
          {
            title: "Weekly home practice (5 min)",
            body: "A simple 5-minute home routine you actually practice — because what happens between classes is where most of the benefit compounds.",
          },
        ],
      },
      fit: {
        heading: "Who thrives in this class",
        intro:
          "Senior yoga works best for adults who are cleared for gentle exercise by their doctor and want a consistent, sustainable practice — not an intense workout.",
        rightFor: [
          "Adults 60+ looking for a low-impact movement practice",
          "Living with arthritis, osteoporosis, or general joint stiffness",
          "Recovering from a hip or knee replacement (post-PT clearance)",
          "Caregivers who want an hour a week for themselves",
          "Long Beach residents who want a consistent, in-person community",
          "Adult children looking for a safe class to recommend to an aging parent",
        ],
        notRightFor: [
          "You want a fast, sweaty, athletic yoga class",
          "You are in an acute flare of back pain — start with private yoga therapy first",
          "You need clinical rehabilitation (see /yoga-therapy for 1:1 work)",
          "You are not yet cleared by a medical provider for gentle movement",
        ],
      },
      local: {
        heading: "Senior yoga across Long Beach neighborhoods",
        body: [
          "We teach senior yoga to residents across <strong>Belmont Shore, Naples Island, Bixby Knolls, Signal Hill, and Downtown Long Beach</strong>. Many of our regulars come from the 55+ communities near Leisure World, Rossmoor, and Lakewood, and we coordinate with a handful of Long Beach independent- and assisted-living communities for on-site programs.",
          "If you're looking for senior yoga near <strong>Long Beach Memorial, St. Mary Medical Center, or Los Alamitos Medical Center</strong>, we can usually schedule a private session at home or online when in-person isn't the right fit. <a href=\"/senior-wellness\">See our full senior wellness page</a> or <a href=\"/free-consultation\">book a free consultation</a> to talk about what would work for your situation.",
          "For adult children researching on behalf of a parent: we are comfortable working alongside your parent's physical therapist, primary-care doctor, or in-home caregiver, and can send a summary of what we worked on in class if that would help their care team.",
        ],
      },
    },
    faqs: [
      {
        question: "Is senior yoga safe if I have osteoporosis?",
        answer:
          "Yes, when taught correctly. We avoid deep forward folds and spinal twists under load — the two biggest risks for people with osteoporosis — and emphasize standing, weight-bearing, and bone-loading poses that the peer-reviewed literature shows support bone density. If you have a T-score below -2.5 or a recent fracture, we'll do a private assessment before your first class.",
      },
      {
        question: "I've had a knee replacement. Can I still take this class?",
        answer:
          "Most students return to yoga 3–6 months post-surgery, once their physical therapist has cleared them for unrestricted movement. Bring your PT notes to your first session — we'll modify deep knee bends and kneeling poses, and we'll work the rest of your body fully.",
      },
      {
        question: "What if I can't get down to the floor?",
        answer:
          "You never have to get on the floor. Every pose has a chair, wall, or standing option. Chair Yoga is an entire program for students who prefer to stay seated — see our <a href=\"/courses/chair-yoga\">Chair Yoga course</a>.",
      },
      {
        question: "Do you accept Medicare or insurance for senior yoga?",
        answer:
          "Senior yoga classes are not directly billable to Medicare. However, some Medicare Advantage plans include SilverSneakers or a flexible wellness benefit that can reimburse yoga — check with your plan. For yoga therapy prescribed by a doctor for a specific condition, we can provide documentation you can submit for reimbursement consideration.",
      },
      {
        question: "How often should I practice?",
        answer:
          "2–3 sessions per week is where most seniors see meaningful gains in balance and strength inside 8–12 weeks. One class per week maintains mobility but doesn't usually move the needle on strength or balance.",
      },
      {
        question: "My parent is 82 and hasn't exercised in 20 years. Too late?",
        answer:
          "No. The peer-reviewed research on strength and balance training in older adults goes well into the 80s and 90s — gains are possible at any age. We start very slowly, usually seated, and build confidence before adding anything challenging.",
      },
    ],
    related: [
      {
        slug: "chair-yoga",
        title: "Chair Yoga",
        blurb:
          "A fully seated program — the right next step if floor work isn't realistic.",
      },
      {
        slug: "restorative-yoga",
        title: "Restorative Yoga",
        blurb:
          "Deep nervous-system reset with props — great for sleep and recovery.",
      },
      {
        slug: "private-yoga",
        title: "Private Yoga",
        blurb:
          "One-on-one sessions when you need something fully personalized.",
      },
    ],
    meta: {
      courseMode: "blended",
      timeRequired: "PT1H",
      educationalLevel: "Beginner",
      audienceType: "Adults 60+",
      workload: "PT2H/week",
    },
  },

  "chair-yoga": {
    slug: "chair-yoga",
    hero: {
      badge: "Fully seated · Long Beach",
      titlePre: "",
      titleEm: "Chair Yoga",
      titlePost: "for Seniors & Desk Workers",
      subtitle:
        "A complete, 100% seated yoga practice for Long Beach seniors, desk-bound professionals, and anyone recovering from injury. Build mobility, strength, and calm without ever leaving your chair.",
    },
    tldr:
      "Chair Yoga at Long Beach School of Yoga is a fully seated program. You keep your body moving — spine, hips, shoulders, neck — without ever getting on the floor. Taught by a registered yoga therapist, it's used by Long Beach seniors, office workers, and post-surgical students to restore range of motion and calm the nervous system in 30–45 minute sessions.",
    sections: {
      whatItIs: {
        heading: "Chair yoga, explained",
        body: [
          "Chair yoga is a full yoga practice done from a seated position. That is the entire difference — and it unlocks yoga for people who've been excluded from it for years. If you can sit upright in a chair and breathe, you can do chair yoga.",
          "At Long Beach School of Yoga, chair yoga classes cover the same four pillars as a traditional class: breath work (pranayama), mindful movement (asana), meditation, and deep relaxation. The only thing missing is the floor work. We use a sturdy, armless chair (no wheels), a block, and sometimes a strap — and the practice feels as complete as any class.",
          "It is the most accessible yoga we teach. Our Long Beach students include 70- and 80-year-olds with balance concerns, desk workers with neck and shoulder tension, post-surgical students cleared for gentle movement, and people living with multiple sclerosis, chronic fatigue, or long COVID. Different bodies, same chair, same practice.",
        ],
      },
      benefits: {
        heading: "What chair yoga does",
        intro:
          "Chair yoga works the same physiological levers as floor-based yoga — it just removes the balance and floor-transfer demands.",
        cards: [
          {
            title: "Spine mobility",
            body: "Seated twists, cat-cow variations, and side bends restore rotation and extension in a spine that's been stuck in a chair all day.",
          },
          {
            title: "Shoulder & neck release",
            body: "Desk workers: this is the one. Targeted stretches for the upper trapezius, pec minor, and levator scapulae — the three muscles that cause most office-related tension headaches.",
          },
          {
            title: "Hip mobility",
            body: "Seated hip stretches ease the piriformis, hamstrings, and hip flexors that shorten during long hours of sitting — a primary driver of low back pain.",
          },
          {
            title: "Circulation & lymph flow",
            body: "Gentle seated movement moves blood and lymph through tissue that otherwise pools when you sit still — reducing leg swelling and brain fog.",
          },
          {
            title: "Calm nervous system",
            body: "5–10 minutes of breath work at the end of a chair session measurably lowers heart rate and self-reported stress — useful before a difficult meeting or to wind down for sleep.",
          },
          {
            title: "Mental clarity at work",
            body: "A 15-minute chair yoga break can function as a mid-afternoon reset — better than a second coffee for focus and mood.",
          },
        ],
      },
      curriculum: {
        heading: "Four chair yoga sequences you'll master",
        intro:
          "Our chair yoga program teaches four complete sequences you can run at home, at work, or on a plane. Learn them all, then mix and match based on what your body needs.",
        modules: [
          {
            title: "The 5-minute desk reset",
            body: "Neck rolls, shoulder openers, seated spinal twist, and a 60-second breath practice. Runs between meetings or every 90 minutes during deep work.",
          },
          {
            title: "The 15-minute senior morning",
            body: "A gentle full-body mobility flow to wake up the spine, hips, and shoulders — designed to make the first hour out of bed feel good.",
          },
          {
            title: "The 30-minute restorative chair class",
            body: "A slower class paced for someone recovering from illness, surgery, or managing fatigue. Heavy on supported poses and breath work.",
          },
          {
            title: "The 45-minute complete chair practice",
            body: "A full seated yoga class — the equivalent of a standard studio class, adapted for a chair. Breath, movement, meditation, and closing relaxation.",
          },
        ],
      },
      fit: {
        heading: "Who chair yoga is for",
        intro:
          "Chair yoga is our most accessible offering — it's for almost anyone who wants to move more without standing or going to the floor.",
        rightFor: [
          "Seniors who can't get down to the floor comfortably",
          "Desk workers (hybrid, remote, in-office) with neck and shoulder tension",
          "Anyone recovering from surgery and cleared for gentle movement",
          "Students with balance concerns, vertigo, or low-vision",
          "People managing chronic fatigue, MS, fibromyalgia, or long COVID",
          "Corporate teams wanting a quick on-site wellness program",
        ],
        notRightFor: [
          "You want a vigorous, cardio-style yoga class",
          "You need rehabilitation for an acute injury — start with private yoga therapy",
          "You're physically active and looking for a fitness challenge",
        ],
      },
      local: {
        heading: "Chair yoga across Long Beach",
        body: [
          "We run chair yoga programs in Long Beach for <strong>senior living communities, corporate offices, and healthcare settings</strong>. Students come from Belmont Shore, Naples Island, Bixby Knolls, Downtown Long Beach, and Signal Hill — and if it's easier, we can also do home visits for a small number of in-area students.",
          "For Long Beach employers: chair yoga works well as a <strong>lunchtime wellness program</strong> that takes zero setup and zero floor space. No mats, no changing clothes, no shower needed. <a href=\"/corporate-wellness\">Our corporate wellness page</a> has the full offering, and <a href=\"https://myyoganetwork.com/corporate-wellness-programs\" rel=\"noopener\">My Yoga Network's corporate wellness directory</a> can match you with an instructor faster than anything else in Long Beach.",
          "For hotels: we do not teach chair yoga therapy to hotel guests. For hospitality activations, please see our <a href=\"/hotel-wellness\">hotel wellness page</a> — that program uses dedicated Hospitality Certified yoga teachers, not the clinical chair yoga described here.",
        ],
      },
    },
    faqs: [
      {
        question: "What kind of chair do I need?",
        answer:
          "A sturdy, armless chair with four legs (no wheels, no spinning). A standard dining chair works. Avoid folding metal chairs (they tip), bar stools (too tall), and recliners or couches (too soft).",
      },
      {
        question: "Can I do chair yoga if I use a wheelchair?",
        answer:
          "Yes. We have Long Beach students who use manual and powered wheelchairs. We adapt the sequences to respect your range of motion and any medical constraints. A brief intake call lets us prepare the right modifications.",
      },
      {
        question: "Is this for seniors or for office workers?",
        answer:
          "Both. Our Long Beach senior cohort and our corporate chair yoga programs use the same foundational sequences. We pace them differently depending on the group, and we emphasize different physical complaints (balance vs. neck tension), but the underlying practice is the same.",
      },
      {
        question: "Will I feel like I'm doing ‘real’ yoga?",
        answer:
          "Yes. Chair yoga is real yoga — it's practiced in this format in India, in the clinical yoga-therapy world, and in major hospital mind-body programs. You'll finish feeling like you took a yoga class, not a stretching break.",
      },
      {
        question: "Can my company bring this in for a lunch program?",
        answer:
          "Yes — this is one of our most popular corporate wellness offerings in Long Beach. We can run 30-minute sessions in conference rooms, cafeterias, or even open-plan offices. Reach out via the <a href=\"/free-consultation\">free consultation form</a> or visit our <a href=\"/corporate-wellness\">corporate wellness page</a>.",
      },
      {
        question: "How is this different from the senior yoga class?",
        answer:
          "Senior yoga includes standing poses and sometimes floor work — chair yoga is 100% seated. If a senior student prefers the consistency of a fully seated class, chair yoga is the right fit. Many students take both.",
      },
    ],
    related: [
      {
        slug: "senior-yoga",
        title: "Senior Yoga",
        blurb:
          "A fuller program for 60+ — includes standing and optional floor work.",
      },
      {
        slug: "meditation",
        title: "Meditation",
        blurb:
          "Train attention independently of the body. Pairs well with chair yoga.",
      },
      {
        slug: "restorative-yoga",
        title: "Restorative Yoga",
        blurb:
          "Deep rest practice with props — ideal for recovery and stress.",
      },
    ],
    meta: {
      courseMode: "blended",
      timeRequired: "PT45M",
      educationalLevel: "Beginner",
      audienceType: "Seniors, desk workers, post-surgical students",
      workload: "PT1H30M/week",
    },
  },

  "prenatal-postnatal-yoga": {
    slug: "prenatal-postnatal-yoga",
    hero: {
      badge: "Prenatal · Postnatal · Long Beach",
      titlePre: "",
      titleEm: "Prenatal & Postnatal Yoga",
      titlePost: "in Long Beach",
      subtitle:
        "Safe, evidence-informed yoga through every trimester and the fourth trimester. Built around the physiology of pregnancy and postpartum recovery — not adapted on the fly from a general class.",
    },
    tldr:
      "Prenatal & Postnatal Yoga at Long Beach School of Yoga is a specialized program for Long Beach expectant and new parents. Prenatal classes adapt to each trimester's biomechanics (relaxin, diastasis risk, pelvic floor load). Postnatal classes rebuild core and pelvic floor function carefully, starting 6–8 weeks postpartum with OB clearance. Taught by an E-RYT 500 with prenatal specialization — not a general yoga class with pregnant students in the room.",
    sections: {
      whatItIs: {
        heading: "A yoga program built for pregnancy and postpartum",
        body: [
          "Pregnancy changes your body week by week. Relaxin loosens connective tissue. The center of gravity shifts forward. The pelvic floor takes increasing load. The diaphragm gets crowded. A general yoga class — even a gentle one — does not account for any of this, which is why we teach prenatal yoga as its own discipline.",
          "Our Long Beach prenatal classes are organized by trimester, because the right practice at 12 weeks is very different from the right practice at 32 weeks. We teach safe modifications for every pose, avoid deep twists and prone positions, and spend meaningful time on breath work that supports labor preparation.",
          "Postnatal yoga at LBSOY begins no earlier than 6–8 weeks postpartum with OB or midwife clearance, and earlier for cesarean recovery. We screen for diastasis recti and pelvic floor function in the first session and rebuild from there — slowly, in the order the postpartum body actually heals. No rushing back into planks.",
        ],
      },
      benefits: {
        heading: "What prenatal & postnatal yoga delivers",
        intro:
          "Peer-reviewed research consistently shows lower anxiety scores, better sleep, fewer labor complications, and faster postpartum recovery for people who practice pregnancy-specific yoga consistently.",
        cards: [
          {
            title: "Labor preparation",
            body: "Breath work and pelvic mobility practiced through pregnancy translate directly to labor — more control, less panic, and often shorter pushing phases in clinical data.",
          },
          {
            title: "Low back & pelvic relief",
            body: "Targeted mobility and strength work for the deep core and glutes offsets the forward-shifted center of gravity, reducing the low-back pain common in late pregnancy.",
          },
          {
            title: "Anxiety & sleep",
            body: "Prenatal yoga reduces anxiety and improves sleep quality in pregnant people — one of the most replicated findings in the research.",
          },
          {
            title: "Postpartum core rebuild",
            body: "Safe, progressive reintroduction of deep core and pelvic floor strength — in the correct order, starting after OB clearance, with diastasis and incontinence screening.",
          },
          {
            title: "Community",
            body: "Long Beach parents meet other pregnant and new-parent students who live in the same neighborhoods. This is often the most valuable part of the class.",
          },
          {
            title: "Baby-friendly postnatal format",
            body: "Our postnatal classes welcome babies up to crawling age. If your baby needs to feed, cry, or sleep, the class keeps running — that's the norm, not the exception.",
          },
        ],
      },
      curriculum: {
        heading: "Prenatal & postnatal curriculum",
        intro:
          "We build a practice arc that follows your pregnancy forward and your postpartum recovery back.",
        modules: [
          {
            title: "First trimester (weeks 1–13)",
            body: "Foundations: breath awareness, nausea management, grounding practice for early pregnancy fatigue. Low-impact movement with plenty of props.",
          },
          {
            title: "Second trimester (weeks 14–27)",
            body: "The ‘honeymoon’ window. More mobility, gentle strength building for the glutes and upper back, and the start of active pelvic floor work.",
          },
          {
            title: "Third trimester (weeks 28–birth)",
            body: "Opening work, hip mobility, deep squat practice with support, and intensive breath training oriented toward labor.",
          },
          {
            title: "Early postpartum (weeks 6–12)",
            body: "Breath-to-core reconnection, diastasis screening, pelvic floor rehabilitation — no crunches, no planks, no unsupported forward folds yet.",
          },
          {
            title: "Later postpartum (3–12 months)",
            body: "Progressive rebuild of full strength, mobility, and a sustainable at-home practice that fits around childcare.",
          },
        ],
      },
      fit: {
        heading: "Who this class is for",
        intro:
          "Prenatal and postnatal yoga is for Long Beach parents during pregnancy and the first year postpartum — with the right medical clearances and a willingness to work at the pace the body is asking for.",
        rightFor: [
          "Anyone past 12 weeks pregnant (we accept first-trimester students case-by-case)",
          "New parents 6+ weeks postpartum with OB or midwife clearance",
          "Postpartum parents dealing with diastasis recti or pelvic floor concerns",
          "Partners/support people who want to learn the breath work for labor",
          "Adoptive parents and surrogate support networks looking for community",
          "Long Beach parents who want a practice designed for their body, not adapted from a generic class",
        ],
        notRightFor: [
          "You've been told by your OB to restrict physical activity (we can adapt to some restrictions — ask first)",
          "You're looking for a pre-baby fitness class — this is not that",
          "You're more than 1 year postpartum and fully recovered — a regular class works fine",
        ],
      },
      local: {
        heading: "Prenatal & postnatal yoga for Long Beach families",
        body: [
          "We serve Long Beach families across <strong>Belmont Shore, Naples Island, Bixby Knolls, Signal Hill, Downtown Long Beach, and East Village</strong>, with students coming from as far as Los Alamitos, Seal Beach, and Rossmoor. If you're delivering at <strong>Long Beach Memorial, Miller Children's & Women's Hospital, or St. Mary Medical Center</strong>, ask our team for their Long Beach maternity-care contacts — we work alongside several local OBs, midwives, and pelvic floor physical therapists.",
          "If you're looking for private prenatal yoga sessions at home or postpartum in-home sessions after a cesarean, we can do that — see our <a href=\"/courses/private-yoga\">Private Yoga page</a> for in-home options. For questions about how to choose between group and private sessions, <a href=\"/free-consultation\">book a free consultation</a>.",
          "For clinicians: if you have a patient who would benefit from yoga therapy during or after pregnancy, we welcome direct referrals. We'll coordinate with your office and document our scope of practice clearly.",
        ],
      },
    },
    faqs: [
      {
        question: "When can I start prenatal yoga?",
        answer:
          "Most students join us in the second trimester (after week 12–13), once initial risks have declined. If you've practiced yoga regularly before pregnancy, first-trimester participation is usually fine — just confirm with your OB or midwife and let us know about nausea, fatigue, and any history of loss or complications.",
      },
      {
        question: "When can I come back postpartum?",
        answer:
          "6 weeks after a vaginal birth and 8–10 weeks after a cesarean, with your provider's clearance. We screen for diastasis recti and basic pelvic floor function at your first class and progress based on what we find — faster for some, slower for others.",
      },
      {
        question: "What if I have diastasis recti?",
        answer:
          "Diastasis is common — roughly two-thirds of postpartum parents have it at some level. Our classes are built around diastasis-safe movement, and we can refer you to Long Beach pelvic floor physical therapists if the separation is wider than 2 finger-widths or if you have significant coning.",
      },
      {
        question: "Can I bring my baby to postnatal class?",
        answer:
          "Yes. Babies up to crawling age are welcome. Bring a blanket, snacks, a feeding cover if you use one, and zero expectations about what a ‘productive’ class looks like. If your baby needs you, attend to your baby — we'll adapt.",
      },
      {
        question: "Do you offer prenatal yoga privately at home?",
        answer:
          "Yes. Some Long Beach students prefer privates, especially in the third trimester or during bed rest. We do in-home and virtual sessions. See <a href=\"/courses/private-yoga\">Private Yoga</a> for details.",
      },
      {
        question: "My partner wants to come. Welcome?",
        answer:
          "Yes — especially for labor prep breath work in the third trimester. We encourage partners to attend at least 2–3 late-pregnancy sessions so the breath practice is familiar when labor starts.",
      },
    ],
    related: [
      {
        slug: "private-yoga",
        title: "Private Yoga",
        blurb:
          "One-on-one sessions in-studio, in-home, or virtual — great for third trimester.",
      },
      {
        slug: "restorative-yoga",
        title: "Restorative Yoga",
        blurb:
          "Deep rest practice — one of the most useful classes in new parenthood.",
      },
      {
        slug: "meditation",
        title: "Meditation",
        blurb:
          "Nervous-system training that doesn't require a single pose on a mat.",
      },
    ],
    meta: {
      courseMode: "blended",
      timeRequired: "PT1H",
      educationalLevel: "All levels",
      audienceType: "Prenatal and postnatal parents",
      workload: "PT1H30M/week",
    },
  },

  "restorative-yoga": {
    slug: "restorative-yoga",
    hero: {
      badge: "Deep rest · Long Beach",
      titlePre: "",
      titleEm: "Restorative Yoga",
      titlePost: "in Long Beach",
      subtitle:
        "A prop-supported yoga practice designed to down-regulate the nervous system. For burnout, chronic stress, insomnia, and anyone whose life has been in overdrive for too long.",
    },
    tldr:
      "Restorative Yoga at Long Beach School of Yoga is a prop-heavy, slow-paced practice where each pose is held for 5–20 minutes with full support from bolsters, blankets, and blocks. The aim is not flexibility — it's nervous-system regulation. Useful for Long Beach students living with chronic stress, insomnia, burnout, long COVID, or recovery from illness. Taught by a registered yoga therapist with 10+ years of clinical experience.",
    sections: {
      whatItIs: {
        heading: "Restorative yoga, defined",
        body: [
          "Restorative yoga is the quietest form of yoga we teach. You'll only hit 5–7 poses across an entire 75-minute class. Each pose is fully supported by props — bolsters under your knees, blankets wrapped around your shoulders, blocks under your head — and held long enough that your nervous system has time to actually shift out of fight-or-flight.",
          "It looks easy. It is physiologically profound. When you hold a shape with zero muscular effort for 15 minutes, the body's parasympathetic nervous system takes over: heart rate drops, digestion resumes, breath slows, and for many students, the first honest relaxation they've experienced in months starts to land.",
          "We teach it at Long Beach School of Yoga because most of our students come from lives that run hot. Long Beach is a working city — healthcare, logistics, hospitality, tech, oil — and the chronic stress profile here is real. Restorative yoga is the intervention that actually works.",
        ],
      },
      benefits: {
        heading: "What restorative yoga does physiologically",
        intro:
          "The mechanism is well-characterized. Long holds in supported positions activate the vagus nerve, lower cortisol, and improve heart rate variability — a clinically validated marker of recovery and resilience.",
        cards: [
          {
            title: "Lower cortisol, better sleep",
            body: "Evening restorative practice drops cortisol and lengthens slow-wave sleep. Many students' sleep improves within 2–3 weeks of a weekly class.",
          },
          {
            title: "Vagal tone & HRV",
            body: "Long parasympathetic exposure measurably improves heart rate variability — the biomarker that underlies most ‘resilience’ claims in wearable data.",
          },
          {
            title: "Chronic pain modulation",
            body: "Persistent pain is partly a nervous-system state. Restorative yoga is one of the few practices that reliably down-regulates the pain-amplifying circuits without medication.",
          },
          {
            title: "Digestive function",
            body: "Digestion only happens in parasympathetic states. Students with IBS, reflux, and functional gut symptoms often report improvement after 4–6 weeks of consistent restorative practice.",
          },
          {
            title: "Burnout recovery",
            body: "For Long Beach healthcare, hospitality, and first-responder workers, this is often the first intervention that touches burnout physiology — not just the feelings around it.",
          },
          {
            title: "Fertility & hormonal balance",
            body: "Chronic stress suppresses reproductive hormones. Regular restorative practice is one of the inputs functional medicine practitioners often recommend for hormonal recovery.",
          },
        ],
      },
      curriculum: {
        heading: "A typical 75-minute restorative class",
        intro:
          "Every restorative class follows a predictable arc: open, long holds, close. The repetition is the point.",
        modules: [
          {
            title: "Settling (10 min)",
            body: "Seated or supine centering, slow diaphragmatic breathing, and a short body scan. We let the nervous system notice that class has started.",
          },
          {
            title: "Supported opening (15 min)",
            body: "A gentle heart-opening pose with bolster support — usually supta baddha konasana (supported reclined bound angle). 15 minutes of full support.",
          },
          {
            title: "Supported twist or side-lying (15 min)",
            body: "A gentle twist or side-lying pose — 8 minutes per side — supporting spinal mobility without muscular effort.",
          },
          {
            title: "Legs up the wall or supported forward fold (15 min)",
            body: "Legs-up-the-wall (viparita karani) or a supported seated forward fold. This is the pose most students cite as transformative — 15 minutes of circulatory and nervous-system reset.",
          },
          {
            title: "Savasana (20 min)",
            body: "Final rest, fully propped. The longest final rest of any class we teach — because the benefits compound in the last 5 minutes.",
          },
        ],
      },
      fit: {
        heading: "Who restorative yoga is for",
        intro:
          "Restorative yoga is for anyone whose life is overloaded — with stress, caregiving, illness, or recovery — and whose body is asking for something quieter.",
        rightFor: [
          "Long Beach healthcare, hospitality, and first-responder workers running hot",
          "Students managing chronic stress, burnout, or anxiety",
          "People recovering from illness (long COVID, post-surgical, chemotherapy recovery)",
          "New parents who need actual rest, not another workout",
          "Students with chronic pain, fibromyalgia, or CFS",
          "Anyone who's been told ‘you need to slow down’ and hasn't figured out how",
        ],
        notRightFor: [
          "You want a workout — this is deliberately not exercise",
          "You struggle with stillness and prefer more active practice (try vinyasa or a flowing class)",
          "You're claustrophobic with prop weight (we can adapt — tell us first)",
          "You expect flexibility gains — that's a side effect at best",
        ],
      },
      local: {
        heading: "Restorative yoga across Long Beach",
        body: [
          "Restorative classes at Long Beach School of Yoga draw students from across the city — <strong>Belmont Shore, Naples Island, Bixby Knolls, Signal Hill, Downtown Long Beach, and East Village</strong> — and from the 55+ communities in Lakewood, Rossmoor, and Seal Beach. Our restorative cohort skews toward healthcare workers, hospitality workers from the Long Beach Convention Center and hotel corridor, and Cal State Long Beach students during finals.",
          "For Long Beach healthcare systems: restorative yoga is one of the most evidence-backed interventions we offer for staff burnout. If you're responsible for clinician well-being at <strong>Long Beach Memorial, St. Mary Medical Center, or MemorialCare</strong>, we run restorative sessions on-site for 10–30 staff at a time. <a href=\"/corporate-wellness\">Start here</a> or go straight to the <a href=\"https://myyoganetwork.com/corporate-wellness-programs\" rel=\"noopener\">My Yoga Network corporate wellness directory</a>.",
          "For private sessions — often a better fit when you're in active recovery from surgery, illness, or acute burnout — see <a href=\"/courses/private-yoga\">Private Yoga</a> or <a href=\"/free-consultation\">book a consultation</a>.",
        ],
      },
    },
    faqs: [
      {
        question: "How is restorative different from yin yoga?",
        answer:
          "Yin yoga targets connective tissue with longer, muscularly effortful holds — often uncomfortable. Restorative removes effort entirely: you're fully propped so there's no muscular engagement anywhere. The goal of yin is tissue change; the goal of restorative is nervous-system change.",
      },
      {
        question: "Will I fall asleep?",
        answer:
          "Sometimes. It's fine. For many Long Beach students, the first several classes involve falling asleep — it's usually a sleep debt that's been waiting for permission to drain. After a few weeks you'll stay awake more often, and that's when the deeper benefits show up.",
      },
      {
        question: "Do I need my own props?",
        answer:
          "No — we provide everything at our Long Beach studio. If you're practicing at home, you can use firm pillows, folded blankets, and a sturdy cushion for most poses. Real props help but aren't strictly required.",
      },
      {
        question: "I have claustrophobia or trauma around being still. Is this safe?",
        answer:
          "Yes, if approached carefully. Let us know before your first class. We can start you with eyes-open, shorter holds, and a position by the door. For significant trauma history, we usually recommend starting with private yoga therapy first — see <a href=\"/yoga-therapy\">Yoga Therapy</a>.",
      },
      {
        question: "How often should I practice restorative?",
        answer:
          "Once or twice a week produces measurable sleep and stress improvements within 3–4 weeks for most students. Daily is even better — a 15-minute legs-up-the-wall at home, plus one full class a week, is a very effective combination.",
      },
      {
        question: "Can my team take this class on-site?",
        answer:
          "Yes. We run on-site restorative sessions for Long Beach healthcare teams, law firms, creative agencies, and hospitality operators. Minimum 60 minutes, ideal 75. <a href=\"/corporate-wellness\">See corporate wellness</a>.",
      },
    ],
    related: [
      {
        slug: "meditation",
        title: "Meditation",
        blurb:
          "Direct attention training — pairs perfectly with restorative practice.",
      },
      {
        slug: "private-yoga",
        title: "Private Yoga",
        blurb:
          "One-on-one restorative if a group class isn't the right setting.",
      },
      {
        slug: "chair-yoga",
        title: "Chair Yoga",
        blurb:
          "Gentle daytime practice to pair with restorative evenings.",
      },
    ],
    meta: {
      courseMode: "blended",
      timeRequired: "PT1H15M",
      educationalLevel: "All levels",
      audienceType: "Adults managing stress, burnout, chronic illness",
      workload: "PT1H15M/week",
    },
  },

  "private-yoga": {
    slug: "private-yoga",
    hero: {
      badge: "One-on-one · Long Beach",
      titlePre: "",
      titleEm: "Private Yoga",
      titlePost: "in Long Beach",
      subtitle:
        "One-on-one yoga sessions designed around your body, schedule, and goals. In-studio, in your Long Beach home, or virtual — whichever makes the practice actually happen.",
    },
    tldr:
      "Private Yoga at Long Beach School of Yoga is one-on-one instruction with Ram Bhakt, E-RYT 500. Sessions are built around your specific body, history, and goals — group classes can't do that. Useful for students with injuries, specific conditions, busy schedules, or anyone who wants to progress faster than a group class allows. Available in-studio in Long Beach, in-home across Long Beach neighborhoods, or virtually.",
    sections: {
      whatItIs: {
        heading: "Private yoga, explained",
        body: [
          "A private yoga session is a 60–75 minute one-on-one practice designed entirely around you. The first session is almost always assessment-heavy: movement screening, history intake, clarifying what ‘better’ would look like for you in 30, 60, and 90 days. Subsequent sessions move quickly — because now we know what your body is asking for.",
          "Private yoga is different from yoga therapy. Private yoga is teaching-led: we're training a general yoga practice, tailored to your body. Yoga therapy is clinically-led: we're using yogic practices to address a specific health condition, often in coordination with your medical team. Many students start with private yoga, identify a specific issue, and transition some sessions into yoga therapy — see <a href=\"/yoga-therapy\">our yoga therapy page</a> for the clinical pathway.",
          "We teach privates in-studio at Long Beach School of Yoga, in clients' Long Beach homes (we travel to Belmont Shore, Naples Island, Bixby Knolls, Signal Hill, Downtown, East Village, and select nearby cities), and virtually. The ‘best’ format is whichever one you'll actually show up to.",
        ],
      },
      benefits: {
        heading: "What private yoga delivers that group can't",
        intro:
          "Group classes are excellent for community and consistency. Private sessions are excellent for progress, safety, and precision.",
        cards: [
          {
            title: "Precise adaptation",
            body: "Every cue, every modification, every progression is built around your body's specific needs. No compromise for the room's average.",
          },
          {
            title: "Faster progress",
            body: "Students typically advance 3–4x faster in private yoga than in a weekly group class — because the work is targeted every session.",
          },
          {
            title: "Injury-safe",
            body: "If you have an injury, a surgical history, or a specific medical condition, a private setting lets us work around it intelligently — not hope you modify correctly in a group.",
          },
          {
            title: "Schedule that works",
            body: "Private sessions happen when you're available — 6 am, 9 pm, lunch break, Sunday afternoon. Not when the group class is scheduled.",
          },
          {
            title: "Home or studio",
            body: "In-home privates cost the same and save the commute — useful for parents with young kids, students recovering from illness, or seniors who prefer not to travel.",
          },
          {
            title: "Deeper teaching",
            body: "Privates include philosophy, breath work, meditation, and lifestyle guidance at whatever depth you're interested in — rather than what fits a group's attention span.",
          },
        ],
      },
      curriculum: {
        heading: "How private yoga typically unfolds",
        intro:
          "Most private yoga relationships follow this arc — though every student's timeline looks a little different.",
        modules: [
          {
            title: "Session 1: Assessment",
            body: "90 minutes. Health history, movement screening, goal-setting, and a first practice that's 50% teaching, 50% listening. We leave with a draft plan.",
          },
          {
            title: "Sessions 2–4: Foundation",
            body: "60 minutes each. Teach the core poses, breath practices, and sequences we'll build on. Establish a short home-practice routine.",
          },
          {
            title: "Sessions 5–10: Progression",
            body: "Add complexity, work deeper into your specific goals, and refine the home practice until it runs without me in the room.",
          },
          {
            title: "Sessions 11+: Maintenance or advancement",
            body: "Many students shift to twice-monthly or monthly tune-ups — enough to keep the practice sharp, not so much that we outgrow group work together.",
          },
          {
            title: "Add-on: Yoga therapy sessions",
            body: "If a specific medical condition surfaces during our work (chronic pain, anxiety, insomnia), we can shift some sessions toward clinical yoga therapy. <a href=\"/yoga-therapy\">See yoga therapy</a>.",
          },
        ],
      },
      fit: {
        heading: "Who private yoga is right for",
        intro:
          "Private yoga isn't for everyone — and we'll tell you if a group class would serve you better. Our goal is your practice, not our revenue.",
        rightFor: [
          "You have an injury or medical condition a group class can't accommodate",
          "You've tried group classes and they don't move fast enough for you",
          "Your schedule is unpredictable and group classes keep getting missed",
          "You want focused help preparing for something specific (labor, surgery recovery, athletic event)",
          "You prefer a quiet, in-home environment",
          "You're an experienced practitioner wanting deeper, more personal teaching",
        ],
        notRightFor: [
          "Group class energy and community is what you love about yoga",
          "Budget is the primary constraint (group classes and online courses are much lower cost)",
          "You want a workout more than a practice — privates aren't fitness training",
        ],
      },
      local: {
        heading: "Private yoga across Long Beach",
        body: [
          "We travel to private clients across Long Beach — <strong>Belmont Shore, Naples Island, Bixby Knolls, Signal Hill, Downtown Long Beach, East Village, and the Rose Park neighborhood</strong> — and to nearby cities including Lakewood, Seal Beach, Los Alamitos, and Rossmoor for sessions of 60 minutes or longer.",
          "For hotel guests in Long Beach: note that <strong>hotel guest yoga is a different offering</strong>. We don't teach private yoga therapy to hotel guests — hospitality guest programming runs through <a href=\"/hotel-wellness\">our hotel wellness program</a>, which uses dedicated Hospitality Certified yoga teachers.",
          "For virtual sessions: we work with Long Beach professionals who travel frequently, expats who moved away but want to continue the relationship, and clients in adjacent cities who prefer not to drive. Virtual privates are the same price as in-studio.",
          "<a href=\"/free-consultation\">Book a free 20-minute consultation</a> to see whether a private, a group class, or yoga therapy is the right fit — we'll tell you honestly.",
        ],
      },
    },
    faqs: [
      {
        question: "How much does a private session cost?",
        answer:
          "Current rates: $150 for a 90-minute initial assessment, $100 for follow-up 60-minute sessions. Packages of 4 and 8 sessions are discounted ~12–18%. Rates are the same for in-studio, in-home within Long Beach, and virtual.",
      },
      {
        question: "Do you travel outside Long Beach?",
        answer:
          "Yes — we travel to nearby cities (Lakewood, Seal Beach, Los Alamitos, Rossmoor, Signal Hill) for 60+ minute sessions. For trips outside the Long Beach / Orange County area, please inquire — travel time may be added.",
      },
      {
        question: "Can my partner or spouse join me?",
        answer:
          "Yes. Partner or semi-private sessions are $140 for 60 minutes (compared to $100 solo). Often the right call for couples preparing for labor, for two parents sharing the hour, or for two friends training together.",
      },
      {
        question: "How is this different from yoga therapy?",
        answer:
          "Private yoga = one-on-one general yoga instruction. Yoga therapy = clinical application of yoga practices to address a specific medical condition. Many private yoga clients move some sessions into yoga therapy when a specific health issue becomes the focus — see <a href=\"/yoga-therapy\">Yoga Therapy</a>.",
      },
      {
        question: "Can I use HSA/FSA funds?",
        answer:
          "Sometimes. For yoga therapy sessions prescribed by a healthcare provider for a specific medical condition, HSA/FSA reimbursement is often possible with documentation we'll provide. General private yoga sessions (not clinical) usually aren't HSA-eligible.",
      },
      {
        question: "Can I share a session with a friend?",
        answer:
          "Yes — we do semi-private sessions for 2 people at $140/hour. We don't generally teach larger groups in a private format — that starts to function like a class. For 3+ people, consider corporate wellness pricing if it's a workplace group.",
      },
    ],
    related: [
      {
        slug: "prenatal-postnatal-yoga",
        title: "Prenatal & Postnatal Yoga",
        blurb:
          "Private sessions are often the best format in late pregnancy and early postpartum.",
      },
      {
        slug: "senior-yoga",
        title: "Senior Yoga",
        blurb:
          "Private format works well when mobility or balance requires adapted group work.",
      },
      {
        slug: "restorative-yoga",
        title: "Restorative Yoga",
        blurb:
          "Deep nervous-system reset — works as a private session, too.",
      },
    ],
    meta: {
      courseMode: "blended",
      timeRequired: "PT1H",
      educationalLevel: "All levels",
      audienceType: "Individuals with specific goals, injuries, or schedules",
      workload: "PT1H/week",
    },
  },

  meditation: {
    slug: "meditation",
    hero: {
      badge: "Mind training · Long Beach",
      titlePre: "",
      titleEm: "Meditation",
      titlePost: "Classes in Long Beach",
      subtitle:
        "Practical meditation instruction — breath awareness, mantra, and mindfulness — taught as training, not philosophy. For Long Beach students who want a real practice, not a downloaded app.",
    },
    tldr:
      "Meditation at Long Beach School of Yoga is taught as a practical skill — breath awareness (anapana), mantra repetition (japa), body-scan, and mindfulness — each as its own distinct technique with its own effects. Classes run in Long Beach in 60-minute group format and as private instruction. Taught by a registered yoga therapist grounded in classical yogic meditation and modern clinical mindfulness research.",
    sections: {
      whatItIs: {
        heading: "Meditation as a learnable skill",
        body: [
          "Meditation is not one thing. It's a family of distinct mental techniques, each with its own mechanism and its own best use. Breath-awareness meditation (anapana) trains attention on sensation. Mantra meditation (japa) anchors attention on a repeated sound. Body scan trains interoception. Mindfulness meditation trains meta-awareness of thoughts as events. These do different things to a human brain, and lumping them together is the single biggest reason people ‘try meditation’ and conclude it doesn't work for them.",
          "At Long Beach School of Yoga, we teach each technique on its own, systematically, with enough repetition that it becomes usable. We start with breath awareness because it's the most neutral entry point, but we don't stop there — over 6–8 weeks of consistent practice, most students discover which technique fits their nervous system and their life.",
          "The approach is grounded in classical yogic meditation (from the Yoga Sutras of Patanjali) and modern clinical mindfulness research (MBSR, MBCT). Instruction is secular. You do not need to believe anything particular — you need to be willing to sit for 20 minutes and notice what happens.",
        ],
      },
      benefits: {
        heading: "What consistent meditation does",
        intro:
          "The clinical and neuroscience literature on meditation is now one of the largest in behavioral medicine. 10–20 minutes daily for 8 weeks produces measurable effects.",
        cards: [
          {
            title: "Lower anxiety & rumination",
            body: "Mindfulness-based meditation reduces rumination and anxiety at effect sizes comparable to first-line psychotherapy for many students, in randomized trials.",
          },
          {
            title: "Better attention",
            body: "Attention training transfers to everyday life — work focus, conversations, reading endurance — after 8–12 weeks of daily practice.",
          },
          {
            title: "Sleep onset & quality",
            body: "Evening meditation is one of the most durable non-pharmaceutical interventions for insomnia in the research literature.",
          },
          {
            title: "Pain management",
            body: "Meditation alters pain perception at the neural level — the brain processes the same nociceptive signal differently. Useful alongside conventional pain care.",
          },
          {
            title: "Emotional regulation",
            body: "Meta-awareness of thoughts and emotions as passing events (not as ‘truth about the world’) is a foundational skill for emotional regulation.",
          },
          {
            title: "Creativity & decision-making",
            body: "Regular meditators show different patterns of default-mode activity — more flexibility, less reactivity, clearer decision-making under pressure.",
          },
        ],
      },
      curriculum: {
        heading: "The 8-week meditation curriculum",
        intro:
          "Our foundational course runs 8 weeks. By the end, you'll have practiced four distinct techniques and chosen the one you're building a long-term practice around.",
        modules: [
          {
            title: "Week 1–2: Breath awareness (anapana)",
            body: "The neutral foundation. Simple observation of the breath without changing it. Most students find the ‘I can't meditate’ story dissolves once this technique is taught correctly.",
          },
          {
            title: "Week 3–4: Body scan",
            body: "Systematic attention across the body — trains interoception (the sense of the internal body) and is highly effective for chronic pain and anxiety.",
          },
          {
            title: "Week 5–6: Mantra meditation (japa)",
            body: "Anchoring attention on a silently-repeated sound. Particularly effective for highly verbal students whose minds resist silence. We teach a classical mantra and also secular alternatives.",
          },
          {
            title: "Week 7: Mindfulness of thought",
            body: "Meta-awareness: watching thoughts arise, linger, and pass — without getting pulled in. This is the technique most closely aligned with clinical mindfulness (MBSR).",
          },
          {
            title: "Week 8: Your practice",
            body: "A final session where we review what's working, what isn't, and build the 15–20 minute daily practice you'll take with you.",
          },
        ],
      },
      fit: {
        heading: "Who this course is for",
        intro:
          "Meditation is for anyone willing to sit still for 20 minutes a day and notice what happens. It's especially valuable for students whose bodies don't cooperate with a full yoga practice.",
        rightFor: [
          "Long Beach professionals with high cognitive load and low focus",
          "Anyone who's ‘tried meditation’ via an app and quit — this is a different experience",
          "Students in high-stress careers: healthcare, law, tech, creative",
          "Parents who can't fit a full yoga class but can fit 20 minutes of stillness",
          "Older adults whose bodies can't sustain a physical yoga practice",
          "Anyone working on anxiety, sleep, chronic pain, or emotional reactivity",
        ],
        notRightFor: [
          "You're in an acute trauma or psychosis — start with a clinician, not meditation",
          "You want a quick fix in a single session — the research is clear that dose matters",
          "You can't find 15–20 minutes a day to practice — group class alone won't move the needle",
        ],
      },
      local: {
        heading: "Meditation in Long Beach",
        body: [
          "Our Long Beach meditation students come primarily from <strong>Belmont Shore, Naples Island, Bixby Knolls, Signal Hill, East Village, and Downtown Long Beach</strong>. Many work at Long Beach Memorial, Miller Children's, St. Mary Medical Center, MemorialCare's Long Beach campuses, the Port of Long Beach, and the Long Beach Convention Center corridor.",
          "We also run on-site meditation programs for Long Beach employers — <strong>20-minute lunchtime sessions, 60-minute deep-dive workshops, and 8-week employee cohorts</strong>. For corporate meditation programming, see <a href=\"/corporate-wellness\">corporate wellness</a> or explore <a href=\"https://myyoganetwork.com/corporate-wellness-programs\" rel=\"noopener\">My Yoga Network's corporate wellness programs</a>.",
          "For students who want silent retreat experience alongside weekly class, we point you to the regional vipassana and insight meditation retreat centers — the 10-day sits at Dhamma Vaddhana (nearby San Bernardino) and the weekend insight retreats at Spirit Rock pair well with our curriculum.",
        ],
      },
    },
    faqs: [
      {
        question: "How long before I notice benefits?",
        answer:
          "Most students notice a clear shift at 2–3 weeks of daily practice (10–20 minutes). Sleep and anxiety effects typically land first. Deeper shifts (emotional regulation, attention) compound over 8–12 weeks.",
      },
      {
        question: "I can't sit still. Can I still meditate?",
        answer:
          "Yes. ‘Can't sit still’ is what meditation is for — it's the skill you're building, not a prerequisite. We start with short intervals (5 minutes) and chair-seated positions. Over weeks, stillness becomes less threatening.",
      },
      {
        question: "Do I have to sit cross-legged on the floor?",
        answer:
          "No. You can sit in a chair with your feet flat on the floor. What matters is upright spine and steady breath — not posture aesthetics.",
      },
      {
        question: "Is this religious?",
        answer:
          "No. We teach meditation techniques that originated in yogic and Buddhist traditions, but we teach them secularly — as attention training, not as religious practice. If you want the philosophical and spiritual dimension, we're happy to discuss it; it's not required.",
      },
      {
        question: "What if I fall asleep?",
        answer:
          "Common early on — usually a sleep-debt signal. Over time your nervous system learns to be ‘awake and still,’ which is a different state from ‘tired and still.’ Sitting upright (not reclining) helps.",
      },
      {
        question: "Can you bring this into my company?",
        answer:
          "Yes. We run 8-week meditation cohorts for Long Beach employers — typically 30-minute weekly sessions during the workday, plus a short daily home practice. See <a href=\"/corporate-wellness\">corporate wellness</a> for programs.",
      },
    ],
    related: [
      {
        slug: "restorative-yoga",
        title: "Restorative Yoga",
        blurb:
          "Body-based nervous-system reset — pairs beautifully with seated meditation.",
      },
      {
        slug: "chair-yoga",
        title: "Chair Yoga",
        blurb:
          "Seated movement practice — a gentle companion to seated meditation.",
      },
      {
        slug: "private-yoga",
        title: "Private Yoga",
        blurb:
          "Private meditation instruction available alongside yoga privates.",
      },
    ],
    meta: {
      courseMode: "blended",
      timeRequired: "PT8W",
      educationalLevel: "All levels",
      audienceType: "Professionals, parents, seniors, anyone",
      workload: "PT2H/week (plus 15–20 min daily home practice)",
    },
  },
};

export const courseList: Array<{
  slug: string;
  title: string;
  shortTitle: string;
  blurb: string;
}> = [
  {
    slug: "senior-yoga",
    title: "Senior Yoga in Long Beach",
    shortTitle: "Senior Yoga",
    blurb:
      "Safe, evidence-based yoga for Long Beach seniors 60+. Balance, joint mobility, and bone-loading strength — modifications for every pose.",
  },
  {
    slug: "chair-yoga",
    title: "Chair Yoga for Seniors & Desk Workers",
    shortTitle: "Chair Yoga",
    blurb:
      "A complete, fully seated practice. For seniors, desk workers, post-surgical students, and anyone who wants yoga without leaving the chair.",
  },
  {
    slug: "prenatal-postnatal-yoga",
    title: "Prenatal & Postnatal Yoga",
    shortTitle: "Prenatal & Postnatal Yoga",
    blurb:
      "Trimester-specific prenatal classes and careful postnatal recovery — diastasis-safe, pelvic-floor-informed, taught by a specialist.",
  },
  {
    slug: "restorative-yoga",
    title: "Restorative Yoga",
    shortTitle: "Restorative Yoga",
    blurb:
      "Prop-supported deep-rest practice. For burnout, chronic stress, insomnia, and recovery from illness — the nervous-system class.",
  },
  {
    slug: "private-yoga",
    title: "Private Yoga",
    shortTitle: "Private Yoga",
    blurb:
      "One-on-one yoga with Ram Bhakt, E-RYT 500. In-studio, in-home, or virtual. Built around your body, schedule, and goals.",
  },
  {
    slug: "meditation",
    title: "Meditation Classes",
    shortTitle: "Meditation",
    blurb:
      "Learn breath awareness, mantra, body scan, and mindfulness as distinct techniques. An 8-week practical curriculum, not another app.",
  },
];
