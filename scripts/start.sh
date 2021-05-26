#!/bin/bash

if ["$ENV" = ""]; then
    echo "Deaulting to Development",
    export ENV=dev
fi

webpack serve --open-page .