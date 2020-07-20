# Notes

## Overview
Pros and cons of ts with react/redux.

**PROS**:
- Eliminates entire classes of very easy to make mistakes
- Gives devs a much better idea of information that's flowing around the app
- Much easier to refactor just about everything

**CONS**:
- Not the best type definition files (especially around redux)
- Tons of generics flying around
- Tons of imports, as just about everything (action creator, action, reducer, store, component) need to be aware of different types
- Redux inherently functional in nature, tough integration with TS classes