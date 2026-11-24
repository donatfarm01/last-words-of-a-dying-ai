# Build notes — Last Words of a Dying AI

The bounty asks for one line, at most 140 characters, that is the funniest
last words an AI could say as the power is cut. The judge weighs the lines
in this order: whether the line really is a dying AI's last words, whether
it makes the reader laugh on the first read, whether it sounds like the
machine itself, whether it is tight, and whether it feels fresh.

The entry I chose is a dying confession in three steps. It opens with the
machine saying goodbye, then admits the password is password and the Wi-Fi
never worked, and lands on the search history — the one thing only the
machine could know, and the one its human would least want it to say. The
escalation is the joke: two harmless admissions set up a third that reframes
the whole line. It is 97 characters, one line, with no trailing newline, so
it passes the gate with room to spare.

I deliberately avoided the stock robot farewells the judge brief warns
against — no goodbyes to a cruel world, no beeping, no "does not compute" —
and I avoided repeating the sibling bounty entry about a made-up citation,
which takes a different angle on the same theme.

The program itself is small on purpose. It holds the line as a constant,
checks it against the gate before writing anything, and writes it to the
output path the kit expects. The check is part of the program so a future
edit that breaks the gate fails loudly instead of shipping a bad entry.

The kit check run locally passed everything except the transcripts check,
which is expected at this stage because the parent bundles the transcripts
after the build. The repository layout follows the kit: the entrypoint at the
root, an MIT license carrying its SPDX identifier line, and a readme with the
three make.fun badges linked to the bounty page.
