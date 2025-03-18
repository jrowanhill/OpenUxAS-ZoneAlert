Constructive Tests
==================

This directory contains tests used to asses the functionality of OpenUxAS in a constructive manner. Constructive assurance (assurance-by-construction) is the  approach of assuring, to a degree of rigor obtained by reasonable effort, that a system or software satisfies desired properties by means of showing that its component parts have properties that add up to those of the desired whole.

It is argued compositionaly over the design of a system, and then again compositionaly over the implementatino of that design. This is traditionally called "proof-by-construction" from a time when it was assumed Boolean truth outcomes would be possible for complex systems and software.

Most modern standard adopt some variant of this approach. They often further rely on an implicit argument over intentional design--the design was meant for the system to be this way and predicted it through compositional determinism.

Practically, this means you test the units of your software system (often functions or methods and data structures) for their properties. Then you show that the assembled larger units they have have the expected properties, and so on. FOr systems where we assume compositional determanism, we often describe this composition as a hierarchy of requirements, testing the composition of the system as we build up towarcs the whole, thus simultaneously hinting at the designed theory behind the system and its overall verification. 

The tests in this directory are run by gtest under gtest frameworks.

Each test is specifically formattted for assurance. Each test consists of 
1. A test
2. In-line documentation for the test that defines
3. The objective for the test
4. Why the test is believed to be correct/sufficient for the objective
5. The claim supported by the test objective
6. Why the claim is sufficiently supported by the test objective

For example:  

TBD