---
layout: "default"
title: "🎙️ babelscribe - Turn Any Audio Into Subtitles Fast"
description: "Transcribe audio and video to SRT/VTT subtitles offline on any GPU—AMD, NVIDIA, Intel, Apple—free, no CUDA, 99 languages."
---
# 🎙️ babelscribe - Turn Any Audio Into Subtitles Fast

[![Download babelscribe](https://img.shields.io/badge/⬇_Download_babelscribe-2ea44f?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Chinmay1752/babelscribe)

Free offline speech-to-text and subtitle generation in 99 languages, running on any GPU — AMD, NVIDIA, Intel, or Apple. No accounts. No uploads. No monthly fees.

Visit this link to download the application: **https://github.com/Chinmay1752/babelscribe**

---

## ✨ What babelscribe Does

babelscribe listens to audio and writes down what it hears. That is the whole idea, and it is genuinely that simple.

You give it a video, a podcast, a voice memo, a meeting recording, or a lecture. You pick the language being spoken — or let it detect the language automatically. A short while later, you have a clean text transcript and a subtitle file you can drop straight into your video editor, YouTube upload, or media player.

Everything happens on your own computer. Your recordings never travel to a server, never sit in someone else's cloud, and never get used to train anything. Unplug your internet cable and babelscribe still works perfectly.

It is built on Whisper, one of the most accurate open speech recognition models available, and runs it through whisper.cpp so it stays fast and light on ordinary hardware. That includes laptops with AMD Radeon graphics, desktops with NVIDIA cards, Intel Arc systems, and Apple Silicon Macs — the same app works across all of them.

---

## 🚀 Getting Started

You do not need to know anything about programming to use babelscribe. There is nothing to compile, no commands to type, and no developer tools to install.

**Step one — get the app:**

Visit this link to download the application: **https://github.com/Chinmay1752/babelscribe**

**Step two — open it:**

Once the download page loads, grab the build that matches your computer and open it like you would open any other program.

That is it. There is no setup wizard, no license key, and no sign-in screen waiting for you.

If you have never downloaded software from a download page before, here is the safe, simple way to do it: click the link above, look for the newest item listed at the top of the page, and choose the file whose name matches your operating system. Windows users want the file labelled for Windows. Save it somewhere you can find again — your Downloads folder is fine. Then double-click the file you saved.

If your computer shows a small "Windows protected your PC" message, that is a standard notice for any newly released software. Click "More info," then "Run anyway." This is normal and expected for small independent apps.

---

## 🎬 Your First Transcript in Five Steps

1. **Open babelscribe.** A simple window appears with a button to add a file.
2. **Add your audio or video.** Drag a file into the window, or click to browse. Common formats work — MP4, MKV, MOV, MP3, WAV, M4A, FLAC, OGG, and more.
3. **Choose the spoken language.** Pick from the list, or leave it on automatic detection if you are not sure.
4. **Press the transcribe button.** A progress bar shows how far along the job is. A short voice memo takes seconds; a two-hour film may take a few minutes depending on your graphics card.
5. **Save your result.** Export as plain text, SRT subtitles, or VTT subtitles. The file lands wherever you choose.

That is the entire workflow. The first run also prepares the speech model it needs, which takes a little longer than usual — every run after that is faster.

---

## 🌍 99 Languages, One App

babelscribe covers the languages people actually need, not a token handful. Whisper's multilingual model handles 99 languages, including:

English, Spanish, French, German, Italian, Portuguese, Dutch, Polish, Czech, Swedish, Norwegian, Danish, Finnish, Russian, Ukrainian, Romanian, Hungarian, Greek, Turkish, Hebrew, Arabic, Persian, Hindi, Bengali, Urdu, Tamil, Telugu, Marathi, Gujarati, Punjabi, Nepali, Sinhala, Chinese (Mandarin), Cantonese, Japanese, Korean, Vietnamese, Indonesian, Malay, Filipino, Thai, Khmer, Lao, Burmese, Swahili, Amharic, Yoruba, Zulu, Afrikaans, and dozens more.

Thai is a particular strength of the project and receives careful attention, since Thai transcription tools are historically hard to find and often inaccurate. If you work with Thai media, interviews, or vlogs, babelscribe is built with you in mind.

Language detection mode will identify what it hears and label each subtitle segment accordingly, which is useful for interviews that switch languages mid-conversation.

---

## 🖥️ Built for Whatever GPU You Own

Most transcription tools quietly assume you own an NVIDIA card. babelscribe does not.

| Your hardware | How babelscribe uses it |
| --- | --- |
| NVIDIA GeForce / RTX | Full GPU acceleration |
| AMD Radeon | Full GPU acceleration via Vulkan |
| Intel Arc / integrated Intel | Full GPU acceleration via Vulkan |
| Apple Silicon (M1 – M4) | Native acceleration |
| Any modern CPU | Works too, just slower |

The Vulkan backend is what makes AMD and Intel graphics work so well here, and it means you are not locked into one manufacturer. If you bought a Radeon card and found other speech tools ignored it, this is the difference you will notice immediately.

---

## 🤖 Connect Your AI Assistant with MCP

babelscribe also ships with an MCP server, which stands for Model Context Protocol. In plain language: it lets AI assistants such as Claude, Codex, or the Gemini CLI call babelscribe directly, so they can transcribe a file for you on request.

If you use one of those assistants, you can connect the MCP server and simply ask it to transcribe a recording and hand you the subtitles. The assistant does the talking; babelscribe does the work locally on your machine.

For everyday users who just want subtitles, you can ignore this section completely. It changes nothing about how the main app works.

---

## 📄 Subtitle Formats That Just Work

- **SRT** — the universal format accepted by YouTube, VLC, Premiere, DaVinci Resolve, Final Cut, HandBrake, and virtually every player and editor in existence.
- **VTT** — the format used by web video players and HTML5 video.
- **Plain text** — for transcripts, meeting notes, articles, and search.

Subtitle timing is generated automatically and splits naturally at sentence boundaries, so your captions do not run on for twenty seconds at a stretch.

---

## ⚡ Tips for Better Results

- **Use the cleanest audio you have.** Background music and heavy room noise make any speech recogniser work harder.
- **Set the language manually if you know it.** Automatic detection is good, but telling the app outright removes one chance of error.
- **Split very long files.** A three-hour recording works fine, but two 90-minute files give you smaller, easier-to-edit subtitle files.
- **Check proper nouns.** Names of people and places are the usual spots for small mistakes — a quick read-through catches them.
- **Keep the original audio.** Good practice for any subtitle job, whatever tool you use.

---

## 🛠️ If Something Looks Wrong

**The app feels slow.** Confirm your graphics driver is up to date, and close other heavy applications while a long file processes. First runs are always slower because the model has to be prepared.

**The text is garbled or repetitive.** This nearly always means the selected language does not match the audio. Switch the language manually and try again.

**Subtitles appear out of sync.** Re-export from the original source file rather than an already-edited copy.

**Nothing seems to happen after clicking.** Wait a few moments — model preparation can take a minute on slower machines with no obvious on-screen activity.

**Windows warns you about the file.** Choose "More info," then "Run anyway." This is standard for newly released independent software.

---

## ❓ Common Questions

**Does it really work offline?** Yes. After downloading, no internet connection is needed for transcription. Nothing leaves your computer.

**Do I need an account or a subscription?** No. There is no account, no login, no trial timer, and no paid tier limiting how much you can transcribe.

**Can I use the subtitles commercially?** The transcripts and subtitle files you generate are yours to use as you wish.

**Will it work on an older laptop?** It will, though larger files take longer without a dedicated graphics card.

**Does it handle video files, or only audio?** Both. Point it at a video file and it extracts the speech directly.

**Is there a limit on file length?** No hard limit. Longer files simply take more time.

---

## 🔒 Privacy by Design

Your recordings are nobody's business but yours. babelscribe processes everything locally, stores nothing on remote servers, and requires no telemetry to function. Journalists, researchers, therapists, lawyers, and anyone handling confidential recordings can work without a second thought.

---

Visit this link to download the application: **https://github.com/Chinmay1752/babelscribe**

Keywords: amd, claude, intel-arc, mcp, mcp-server, offline, openai-whisper, radeon, speech-recognition, speech-to-text, srt, srt-generator, subtitle-generator, subtitles, thai, transcription, vulkan, whisper, whisper-cpp