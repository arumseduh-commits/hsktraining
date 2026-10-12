import asyncio
import os
import sys
import edge_tts

if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8")

VOICE_MALE = "zh-CN-YunxiNeural"
VOICE_FEMALE = "zh-CN-XiaoxiaoNeural"
VOICE_NARRATOR = "zh-CN-YunyangNeural"

dialogue_script = [
    {
        "role": "male",
        "speaker": "男 (Pria)",
        "voice": VOICE_MALE,
        "text": "请问，去火车站怎么走？"
    },
    {
        "role": "female",
        "speaker": "女 (Wanita)",
        "voice": VOICE_FEMALE,
        "text": "一直往前面走，到了红绿灯往右拐，就在医院旁边。"
    },
    {
        "role": "male",
        "speaker": "男 (Pria)",
        "voice": VOICE_MALE,
        "text": "离这里远不远？需要坐出租车吗？"
    },
    {
        "role": "female",
        "speaker": "女 (Wanita)",
        "voice": VOICE_FEMALE,
        "text": "不远，走路五分钟就到了。"
    },
    {
        "role": "narrator",
        "speaker": "问 (Pertanyaan)",
        "voice": VOICE_NARRATOR,
        "text": "问：去火车站需要坐出租车吗？"
    }
]

async def generate_segment_with_retry(text, voice, output_path, max_retries=3):
    for attempt in range(max_retries):
        try:
            communicate = edge_tts.Communicate(text, voice, rate="-4%", pitch="+0Hz")
            await communicate.save(output_path)
            if os.path.exists(output_path) and os.path.getsize(output_path) > 0:
                return True
        except Exception as e:
            print(f"  Retry {attempt+1}/{max_retries} for {voice} due to {e}")
            await asyncio.sleep(1.0)
    raise Exception(f"Failed to generate {output_path} after {max_retries} attempts")

async def main():
    output_dir = os.path.join(os.path.dirname(__file__), "..", "public", "audio")
    os.makedirs(output_dir, exist_ok=True)
    temp_dir = os.path.join(output_dir, "temp")
    os.makedirs(temp_dir, exist_ok=True)

    segment_files = []
    
    print("Generating dialogue audio segments with Neural Voices...")
    for i, line in enumerate(dialogue_script):
        seg_file = os.path.join(temp_dir, f"seg_{i}.mp3")
        print(f"Segment {i+1} [{line['speaker']}]: {line['text']}")
        await generate_segment_with_retry(line['text'], line['voice'], seg_file)
        segment_files.append(seg_file)
        await asyncio.sleep(0.5)

    final_output = os.path.join(output_dir, "dialogue_demo.mp3")
    
    with open(final_output, "wb") as outfile:
        for seg_path in segment_files:
            with open(seg_path, "rb") as infile:
                outfile.write(infile.read())
            try:
                os.remove(seg_path)
            except:
                pass

    try:
        os.rmdir(temp_dir)
    except:
        pass

    file_size_kb = os.path.getsize(final_output) / 1024
    print(f"\n[SUCCESS] Generated authentic dialogue: {final_output} ({file_size_kb:.1f} KB)")

if __name__ == "__main__":
    asyncio.run(main())
