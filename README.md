promt 1
role : act as an senior full stack web developer working as a project consultant
objective : help me define the complete functionality and user flow for a project called portfolioforge before any code id written 
context : portfolioforge is a personal portfolio website with a real, non trivial backend . it must include :

an admin authentication system ( the portfolio owner can log in to manage  conent)
a "trending score" algorthm for project / skill that change based  on time delayed engagement (e.g 
view / like accumulate weight over time . not just a raw counter 
a contect form that is rate limited (a visitor cannot spam submit it )
a github API integration that pull and display live stat s (repos , commits , langusges) but is CACHED loacally so it dosent hit  github's API on every page load 
this is being built as a single developer semester project , not a production SaaS product. 

Instruction :

1. list all core features grouped by category (public facing , admin only , backend /  system logic)
2. identify the distinct user roles and what each  role can / cannot do
3. describe the primary user flow as a numbered sequence , separately for a visitor and for the admin 
4. flag any features above that has hidden complexity a beginner might understimate

notes : do not write any code yet do not suggest unrelated features (e.g ecommerce , multi user blogs ). keep the scope  realistic for a single developer semester project . output as structured markdown with headers

p 2

Role: Act as a technical project planner who sequences the build order for a web development project.
Objective: Convert the agreed feature list and user flow into a phased, step-by-step development plan I can follow session by session.
Context: This is PortfolioForge,
the confirmed feature list and user flow for generated in the previous step:
Follow as per output 1 
The tech stack is PHP with MySQL. I need to build this incrementally and understand WHY each phase comes before the next - not just get a checklist.
Instructions: 1. Break the build into clear phases (e.g. Setup, Database, Auth, Core Backend Logic, Frontend, Integration, Polish/Testing). 2. Within each phase, list concrete tasks in the order they must be
done. 3. For each phase, explicitly state its dependency on a previous phase (why it can't come earlier). 4. Point out which phase is riskiest or most likely to cause and briefly say why.
Notes: Do not generate code. Do not skip dependency justification that reasoning is the main the point of this step. Output as a numbered phase list with sub-tasks.

p3:

Role: Act as a database architect who designs a MySQL schema strictly from an approved development plan.
Objective: Design a complete, normalized database schema for PortfolioForge based only on what the development plan requires, and output it as runnable SQL.
Context: This is the approved phased development plan from the previous step:
[follow as per output 2]
Instructions: 1. Output the schema as a single .sql file using CREATE TABLE statements (standard MySOL syntax, InnoDB engine). 2. Include PRIMARY KEY, FOREIGN KEY, NOT NULL, UNIQUE, and DEFAULT constraints explicitly. 3. Add an inline SOL comment above each table explaining its purpose in one line. 4. Add inline SQL comments on any column that isn't self-explanatory s (especially columns supporting the trending decay calculation and the rate-limit check).
5. After the CREATE TABLE statements, add INSERT statements with realistic default/sample data for each table (e.g. one admin account, a handful of sample projects/skills with varied timestamps so the trending decay is actually testable, a couple of sample contact-form submission records, one sample cached GitHub stats row). 6. After the SQL block, add a short plain-text section listing any assumptions you made that weren't in the plan. 
Notes: Output must be valid, directly runnable SOL no pseudocode, no markdown tables. Do not add any table or column not justified by the plan or the four features listed above. Sample data must be realistic enough to actually demonstrate the trending decay and rate- limit logic when queried, not just placeholder "testl/test2" rows.

p 4 :

Role: Act as a technical project planner who sequences the build order for a web development project.
Objective: Convert the agreed feature list and user flow into a phased, step-by-step development plan I can follow session by session.
Context: This is the confirmed feature list and user flow for PortfolioForge, generated in the previous step:
[follow form output 1]
The tech stack is PHP with MySQL. I need to build this incrementally and understand WHY each phase comes before the next not just get a checklist.
Instructions:
1. Break the build into clear phases (e.g. Setup, Database, Auth, Core Backend Logic, Frontend, Integration, Polish/Testing).
2. Within each phase, list concrete tasks in the order they must be done.
3. For each phase, explicitly state its dependency on a previous phase (why it can't come earlier).
4. Point out which phase is riskiest or most likely to cause bugs, and briefly say why.
Instructions:
1. Break the build into clear phases (e.g. Setup, Database, Auth, Core Backend Logic, Frontend, Integration, Polish/Testing).
2. Within each phase, list concrete tasks in the order they must be done.
3. For each phase, explicitly state its dependency on a previous phase (why it can't come earlier).
4. Point out which phase is riskiest or most likely to cause bugs, and briefly say why.
Notes: Do not generate code. Do not skip the dependency justification that reasoning is the main point of this step. Output as a numbered phase list with sub-tasks.

p 5:

+Role: Act as a frontend developer who plans page structure and components before writing HTML/CSS.
Objective: Design the frontend page structure and components for PortfolioForge based strictly on the approved schema and development plan every UI element must map to real backend data or logic.
Context: This is the approved database schema from the previous step:
[PASTE OUTPUT FROM STEP 3 HERE]
And this is the approved feature/flow list from step 1:
[PASTE OUTPUT FROM STEP 1 HERE]
Instructions:
1. List every page needed (public and admin), with its purpose.
2. For each page, list the components/sections it contains.
3. For each component, state exactly which database table/column or backend logic it pulls data from invented content.
4. Flag any UI element that would need backend support NOT present in the current schema.
Notes: Describe structure only no actual HTML/CSS code yet. Keep it grounded strictly in the schema provided; do not add pages or widgets "because portfolios usually have them" unless they map to real data.
Launchpad00
