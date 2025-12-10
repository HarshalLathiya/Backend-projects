# I want to build a Kotlin program that generates a student result based on the following logic:

1. Each subject has:
   - subject name
   - credit
   - internal max marks, internal obtained marks
   - external max marks, external obtained marks

2. Total calculation:
   totalMax = internalMax + externalMax
   totalObt = internalObt + externalObt
   percentage = (totalObt / totalMax) * 100

3. Grade Logic:
   96–100 → O (10)
   86–95.90 → A+ (9)
   76–85.90 → A (8)
   66–75.90 → B+ (7)
   56–65.90 → B (6)
   46–55.90 → C (5)
   36–45.90 → P (4)
   0–35.90 → F (0)

4. SGPA Calculation:
   SGPA = Σ(credit × gradePoint) / Σ(credits)

5. CGPA Calculation:
   CGPA = totalGradePointsAllSem / totalCreditsAllSem

I want:
- Kotlin data class for Subject
- Functions to calculate grade, grade point, SGPA, CGPA
- Example usage with list of subjects
- Output that prints subject-wise result, SGPA, CGPA

Generate complete clean Kotlin code.