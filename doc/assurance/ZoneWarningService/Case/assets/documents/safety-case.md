<!-- ToC -->

<!-- LoF -->

<!-- LoT -->

# Safety Case Technology [sc] #

A **safety case** is a structured argument, supported by a body of evidence that
provides a compelling, comprehensible and valid case that a system is safe for a
given application in a given operating environment[^fn1].

The safety case is a specific instance of the more general notion of an
**assurance case**: a structured argument, supported by a body of evidence that
provides a compelling, comprehensible and valid case that a system is
fit-for-use in a given operating environment. **Fitness for use** is a composite
property of a system whose attributes may include:

* Functionality;
* Performance;
* Dependability; and
* Security.

The name of a given assurance case usually embodies the property of greatest
interest. Hence, for example, a "safety case" refers to an assurance case
focused on safety, one of the attributes of dependability. For this case, the 
critical property is safety.

The construction of a safety case does not inherently imply a safe system.
Safety is implied only if:

1. The top-level goals of the design and operational safety arguments are 
   sufficient to imply safety;
2. The logic in all of the arguments is sound; and
3. The evidence cited in support of the arguments is valid and applicable.

Safety engineering thus forms the foundation upon which the safety case is
developed. The safety engineering effort:

1. Identifies, documents and mitigates risks; and
2. Collects evidence in support of the arguments.

In addition to being distinct from safety engineering, the safety case is also
distinct from probabilistic risk assessment. Probabilistic risk assessment
provides one kind of evidence in support of the safety case. Moreover, unlike
probabilities in probabilistic risk assessment, probabilities associated with
goals in lower levels of the safety case cannot be assumed to combine through
any algebraic means to produce probabilities for goals at higher levels.

The development of the safety case is a fundamental part of the development of
the system it documents. As such, it must undergo the same rigorous application
of systems engineering to which the remainder of the system is subjected.

## Elements of a Safety Case [elements] ##

Safety cases rely on arguments that trace explicit paths from premises to
conclusions. In a safety case, the desired conclusion is assurance of a
top-level safety goal. For example, "The system is safe to operate in all
intended environments." The premises are the available evidence from the
system's design and development, combined with what we know about the
environment in which it will operate. The task is to explicitly construct and
document the logic that compels belief in the conclusion (i.e., to show that the
top-level goal has been satisfied) given the evidence. Importantly, both the
argument and the evidence are required. "Argument without supporting evidence is
unfounded, and therefore unconvincing. Evidence without argument is unexplained
-- it can be unclear that (or how) safety objectives have been satisfied"[^fn2].

The elements of a safety case are:

* A set of **goals** in which a top-level goal documents the main safety claim 
  and other sub-goals help to structure and elaborate the argument. Goal 
  statements have the form of a proposition, e.g., "The system is safe," in 
  order that they may be evaluated as true or false.

* A definition of the **context** within which the top-level goal is expected to
  hold. Context includes everything that might be needed to constrain the 
  applicability of the argument to a given set of circumstances.

* A collection of supporting **evidence** that includes results from 
  inspections, analyses, testing, and simulation estimating fundamental system 
  properties, as well as process-based information such as standards compliance 
  and maturity level of the development organization. This evidence forms the 
  basis from which assurance can be argued.

* An explicit **argument** that shows how the overall safety claim (goal) can be
  reasonably inferred from the supporting evidence. In practice, multiple 
  different argument strategies are used in conjunction to argue assurance in a 
  given case.

Historically, claims of system safety or assurance have focused on the process 
by which the systems were developed (e.g., that DO-178B process objectives were
met, or that the OEM was a CMM-Level 4 organization), rather than on evidence
that the product itself had desirable properties. While some process-based
evidence does indirectly impute some confidence in the product and can be
entered into an assurance case as such, the focus of the safety case is on the
properties of the product (the engineered system) itself.

## Organization of a Safety Case [organization] ##

Safety cases include two distinct types of argument, as shown in 
Figure [case-organization].

<p> <img id="case-organization" /> </p>

1. **Design Safety Argument**: an argument that advances a top-level claim 
   stating that the subject system is fit-for-use according to a set of defined 
   parameters *as designed*.

    *Example: a given system is argued to be fit-for-use in its intended 
    environment because it: complies with relevant regulatory guidance; meets 
    its functional and dependability requirements; and mitigates all credible 
    hazards.*

2. **Confidence Argument**: an argument that an associated design or operational
   argument is compelling. The confidence case includes fragments related to 
   each item of evidence and context, and each inference.

    *Example: for a given system that has been argued to be fit-for-use: 
    identified regulatory guidance is argued to be applicable; identified 
    functional and dependability requirements are argued to be correct and 
    sufficient; and the set of identified hazards is argued to be complete. 
    Additionally, supplied evidence is argued to be correct and applicable and 
    logical inferences are argued to be valid.*

Figure [sc-roles] shows these cases in relationship to each other and to the
design and safety engineering efforts for the system documented by the module.

<p> <img id="sc-roles" /> </p>

The systems for which these cases are constructed are very large --- the
rationale for any of the cases would be far too large to document with a single
monolithic argument. To address this problem, the arguments are modularized, as
illustrated in Figure [modular] (details of the notation are presented in
Section [gsn]).

<p> <arg id="modular" /> </p>

The modular structure of an argument will, in general, differ from the modular
structure of the system it describes. Safety and other assurance properties
often transcend system and subsystem boundaries, which in turn leads to
safety&nbsp;case modules that transcend system and subsystem boundaries.


## The Goal Structuring Notation [gsn] ##

The Goal Structuring Notation (GSN) is a graphical language that provides a rich
set of syntax and semantics for documenting safety arguments.  It enables
representation of the logical relationships among the basic elements of safety
cases, as well as the documentation of supporting information to contextualize
this logic. It is accessible to readers of a wide variety of backgrounds and
expertise, enabling a common communication mechanism for safety argumentation
and audit. It is also supported by editing tools, and is amenable to some
automated analysis.

The primary syntactic elements of GSN are described in Table [gsn-elements].

[GSN Elements [gsn-elements]]

Name          | Also Called | Description     |
 --            | -           | -               |                                    
Goal          | Claim       | Specific claim that the argument supports                            |
Solution      | Evidence    | Evidence supporting the claims                                       |
Strategy      | N/A         | Method  for decomposing claims                                       |
Context       | N/A         | Real-world references, definitions, and other pertaining information |
Assumption    | N/A         | Real-world references, definitions, and other pertaining information |
Justification | N/A         | Real-world references, definitions, and other pertaining information |
Module        | N/A         | Provides abstraction and modularization                              |


These elements are all represented in GSN by distinct shapes, as shown in 
Figure [example]. Goals, Strategies, and Solutions are related hierarchically by 
closed arrows, while support of these elements by Contexts is shown by open
arrows. Additionally, GSN supports desirable properties such as modularization
and reuse of argument fragments through mechanisms called modules and patterns.

<p> <arg id="example" /> </p>

## Argument Patterns [patterns] ##

Arguments relate evidence to claims and are not always unique. Given the need
to elaborate a claim one has seen before, it is natural to reference how one
accomplished it the first time. It becomes apparent that abstraction is
possible. If it is conceivable that this goal might come up again, defining a
pattern allows one to leverage the work already done in order to reduce the
effort required to elaborate subsequent instances.

A pattern is an encapsulation of recurring logic, codified and annotated to
enable productive reuse in new arguments. Patterns capture successful argument
approaches, document "best practice" arguments, and codify specialized domain
expertise and "tools of the trade". They document reusable relationships while
parameterizing the parts that must be reinstantiated for custom use.

As patterns declare themselves via the safety-case development activity
taking place for a given project or domain, the notion of a pattern library
arises. A pattern library is a repository of argument fragments that recur for
a given system or domain, and are collected in one place for easy reference in
developing new arguments. Also included is information on how to use the
pattern appropriately as well as direction in how to avoid pitfalls in using
the pattern.

Patterns have a number of benefits, including reduction of effort in safety
case development, and increased confidence in arguments in which validated
patterns have been incorporated. They further increase consistency across
arguments generated by different authors. Syntax for pattern support is
included in GSN.

## Ownership and Responsibility in a Safety Case [ownership] ##

The critical issue in a safety case for any system is belief in the claims
being made. The safety case has been introduced to document and support the
notion that belief must still be founded, even in the absence of complete
quantifiability.

The safety case provides explicit documentation of the arguments and evidence
by which claims are supported and therefore facilitates assessment. Belief in
each claim thus arises when qualified experts review the argument, evidence,
context and assumptions associated with that claim.

For complex systems, there are many claims and many experts
assessing the claims. To ensure that adequate belief has been established for
each claim, a systematic approach to mapping and cataloging claims and related
arguments, evidence, context and assumptions to the associated experts is
essential.


# References #

[^fn1]: MoD Defence Standard 00-56 (Part 1)/4 Annex A

[^fn2]: Kelly, T.P.: *Arguing Safety - A Systematic Approach to Managing Safety 
        Cases*, DPhil Thesis, Department of Computer Science, University of 
        York, UK, 1998.
